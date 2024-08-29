import { createAction, props } from "@ngrx/store";
import { TArrayOfUsers } from "./userDetails.reducer";



export const incrementUser = createAction('Create Increment')
export const decrementUser = createAction('Create Decrement')
export const resetUser = createAction('Create Reset')

export const userDetailsUpdate = createAction('User Details',props<{ userData: { [key: string]: any } }>())
export const userDetailsArrayUpdate = createAction('User Array Details',props<{ arrayOfUsers: TArrayOfUsers[] }>())



