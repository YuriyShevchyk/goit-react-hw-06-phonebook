export const getFilterContacts = ({contacts}) => {
    const {items, filter} = contacts;
    if(!filter) {
        return items;
    }


const normalisedFilter = filter.toLocaleLowerCase();
const filterContacts = items.filter(({name, number}) => {
    const normalisedTitle = name.toLocaleLowerCase();
    const filterResult = normalisedTitle.includes(normalisedFilter) || number.includes(normalisedFilter);
    return filterResult;

});
return filterContacts;
};