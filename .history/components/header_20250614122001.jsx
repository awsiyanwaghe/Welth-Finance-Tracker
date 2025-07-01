import { SignOutButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div>
      <Signout>
        <SignInButton />
        <SignUpButton />
      </Signout>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Header;
