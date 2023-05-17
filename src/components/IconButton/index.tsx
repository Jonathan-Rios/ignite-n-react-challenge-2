import { Button } from "./styles";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  buttonType?: "box" | "round";
  onlyBadge?: boolean;
  children?: React.ReactNode;
}

export function IconButton({
  icon,
  buttonType,
  onlyBadge = false,
  children,
  ...rest
}: IconButtonProps) {
  return (
    <Button buttonType={buttonType} onlyBadge={onlyBadge} {...rest}>
      {icon}
      {children}
    </Button>
  );
}
