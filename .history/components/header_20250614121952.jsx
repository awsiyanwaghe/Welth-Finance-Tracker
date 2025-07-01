import { SignOutButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div>
      <SignOutButton>
        <SignInButton />
        <SignUpButton />
      </SignOutButton>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Header;
