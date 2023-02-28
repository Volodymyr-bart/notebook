import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts.items;
export const selectIsLoading = state => state.contacts.contacts.isLoading;
export const selectError = state => state.contacts.contacts.error;
export const selectFilter = state => state.filter.filter;
export const SelectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, statusFilter) => {
    if (statusFilter) {
      const normalizedFilter = statusFilter.toLowerCase();
      return contacts.filter(item =>
        item.name.toLowerCase().includes(normalizedFilter)
      );
    }
    return contacts;
  }
);
