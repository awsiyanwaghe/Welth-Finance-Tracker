import { SignedOut, SignIn, SignOutButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div>
      <SignedOut>
        <SignIn />
        <Signup />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Header;
