const Header = () => {
  return (
    <div>
      <Signo>
        <SignInButton />
        <SignUpButton />
      </Signo>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Header;
