import { create } from 'zustand'
import { persist } from 'zustand/middleware'
// import type {} from '@redux-devtools/extension' // required for devtools typing


interface User {
    name:  string
    email: string
}

interface UserState {
    currentRole: "store" | "admin",
    setCurrentRole: (role: "store" | "admin") => void,
    user?: User
    setUser: (user: User | undefined) => void,
    token?: string;
    setToken: (token: string) => void;
}

const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            currentRole: "store",
            setCurrentRole: (role) => set({ currentRole: role }),
            user:  null,
            setUser: (user) => set({ user }),
            token: '',
            setToken: (token) => set({ token }),
        }),
        {
            name: 'user-storage',
        }
    )
)

export default useUserStore