import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { serviceBusinessOptions } from '@/constants/service-business';

import { ServiceOption } from '@/interfaces/servicesSelect';

interface ServiceDetailsState {
  companyName: string;
  selectedTeamSize: string;
  selectedBusinessDirection: ServiceOption;
}

const initialState: ServiceDetailsState = {
  companyName: '',
  selectedTeamSize: '41-50',
  selectedBusinessDirection: serviceBusinessOptions[0] || {
    value: '',
    label: '',
  },
};

const serviceDetailsSlice = createSlice({
  name: 'serviceDetails',
  initialState,
  reducers: {
    setCompanyName: (state, action: PayloadAction<string>) => {
      state.companyName = action.payload;
    },
    setSelectedTeamSize: (state, action: PayloadAction<string>) => {
      state.selectedTeamSize = action.payload;
    },
    setSelectedBusinessDirection: (
      state,
      action: PayloadAction<ServiceOption>,
    ) => {
      state.selectedBusinessDirection = action.payload;
    },
  },
});

export const {
  setCompanyName,
  setSelectedTeamSize,
  setSelectedBusinessDirection,
} = serviceDetailsSlice.actions;

export default serviceDetailsSlice.reducer;
