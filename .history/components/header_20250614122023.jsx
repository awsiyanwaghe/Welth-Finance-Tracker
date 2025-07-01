import { SignedOut, SignIn, SignOutButton, SignUpButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div>
      <SignedOut>
        <SignIn />
        <SignUpButton />
      </SignedOut>
      <Sign>
        <UserButton />
      </Sign>
    </div>
  );
};

export default Header;
