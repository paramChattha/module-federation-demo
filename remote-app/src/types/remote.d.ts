declare module "kycRemote/KycApp" {

  interface kycAppProps {
    onComplete: (result: { status: boolean; userId: string; timestamp: number }) => void;
  }
    const KycApp: React.ComponentType<kycAppProps>;
    export default KycApp;
}