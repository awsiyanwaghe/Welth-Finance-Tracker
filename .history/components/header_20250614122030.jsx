import { SignedOut, SignIn, SignOutButton, SignUpButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div>
      <SignedOut>
        <SignIn />
        <SignUpButton />
      </SignedOut>
      <>
        <UserButton />
      </>
    </div>
  );
};

export default Header;
