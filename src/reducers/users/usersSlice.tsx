import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IUser, IUserState } from '../../api/users/interfasec';
import { createUser, deleteUser, getUsers, updateUser } from '../../api/users/users';


// -------------------------------------- INITIAL STATE -----------------------------------------------------
const initialState: IUserState = {
    userIsLoading: false,
};


// -------------------------------------- THUNKS -----------------------------------------------------
export const getAllUsersThunk = createAsyncThunk(
    'getAllUsers',
    async(_, {dispatch}) => {
        const response = await getUsers()
        dispatch(usersActions.setUsers(response.data))
    }
)

export const createUserThunk = createAsyncThunk(
    'createUserThunk',
    async(data: IUser) => {
        const response = await createUser(data)
    }
)

export const updateUserThunk = createAsyncThunk(
    'updateUser',
    async(data: IUser) => {
        const response = await updateUser(data)
    }
)

export const deleteUserThunk = createAsyncThunk(
    'deleteUser',
    async(id: string, {dispatch}) => {
        const response = await deleteUser(id)
        dispatch(usersActions.removeUser(id))
    }
)


// -------------------------------------- REDUCERS -----------------------------------------------------
export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state: IUserState, action: PayloadAction<IUser[]>){
            state.users = action.payload
        },
        removeUser(state: IUserState, action: PayloadAction<string>){
            state.users = state.users?.filter((arrow) => arrow.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllUsersThunk.pending, (state: IUserState) => {
            state.userIsLoading = true
        })
        builder.addCase(getAllUsersThunk.fulfilled, (state: IUserState) => {
            state.userIsLoading = false
        })
        builder.addCase(getAllUsersThunk.rejected, (state: IUserState, action: any) => {
            state.userIsLoading = false
            state.userErrorMessage = action.error.message
        })
        builder.addCase(createUserThunk.pending, (state: IUserState) => {
            state.userIsLoading = true
        })
        builder.addCase(createUserThunk.fulfilled, (state: IUserState) => {
            state.userIsLoading = false
        })
        builder.addCase(createUserThunk.rejected, (state: IUserState, action: any) => {
            state.userIsLoading = false
            state.userErrorMessage = action.error.message
        })
        builder.addCase(updateUserThunk.pending, (state: IUserState) => {
            state.userIsLoading = true
        })
        builder.addCase(updateUserThunk.fulfilled, (state: IUserState) => {
            state.userIsLoading = false
        })
        builder.addCase(updateUserThunk.rejected, (state: IUserState, action: any) => {
            state.userIsLoading = false
            state.userErrorMessage = action.error.message
        })
        builder.addCase(deleteUserThunk.pending, (state: IUserState) => {
            state.userIsLoading = true
        })
        builder.addCase(deleteUserThunk.fulfilled, (state: IUserState) => {
            state.userIsLoading = false
        })
        builder.addCase(deleteUserThunk.rejected, (state: IUserState, action: any) => {
            state.userIsLoading = false
            state.userErrorMessage = action.error.message
        })
    }
})


export const usersActions = usersSlice.actions
export const usersReducers = usersSlice.reducer