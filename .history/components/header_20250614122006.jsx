import { SignedOut, SignOutButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div>
      <SignedOut>
        <Signin />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Header;
