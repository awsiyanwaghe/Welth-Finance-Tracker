import { SignedIn, SignedOut, SignIn, SignOutButton, SignUpButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div>
      <SignedOut>
        <SignIn />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </Signedin>
    </div>
  );
};

export default Header;
