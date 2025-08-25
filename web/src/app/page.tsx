import { auth } from "@/auth"
import UserAvatar from "@/components/avatar"
import SignIn from "@/components/sign-in"
import { SignOut } from "@/components/sign-out"

export default async function Home() {
    const session = await auth()

    return (
        <div>
            {session?.user ? <SignOut /> : <SignIn />}
            <UserAvatar />
        </div>
    )
}
