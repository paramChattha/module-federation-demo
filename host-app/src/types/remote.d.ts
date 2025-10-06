declare module "remote_app/Button" {
  const Button: React.FC<{
    text: string;
    onClick?: () => void;
  }>;
  export default Button;
}

declare module "remote_app/Header" {
  const Header: React.FC;
  export default Header;
}

declare module "kycRemote/KycApp" {
interface KycAppsProps {
  onComplete: (result: { status: boolean, userId: string, timestamp: number}) => void
}

  const KycApp: React.ComponentType<KycAppsProps>;
  export default KycApp;
}