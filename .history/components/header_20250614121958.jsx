import { SignOutButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div>
      <>
        <SignInButton />
        <SignUpButton />
      </>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Header;
