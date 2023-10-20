export interface IButton {
  label: string;
  onPress?: ((event: any) => void) | undefined;
}
