export const getFilterContacts = ({contacts}) => {
    const {items, filter} = contacts;
    if(!filter) {
        return items;
    }


const normalisedFilter = filter.toLocalLowerCase();
const filterContacts = items.filter(({name, number}) => {
    const normalisedTitle = name.toLocalLowerCase();
    const filterResult = normalisedTitle.includes(normalisedFilter) || number.includes(normalisedFilter);
    return filterResult;

});
return filterContacts;
};