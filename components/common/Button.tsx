import { Button } from "@/components/ui/button";
import { ActionButtonProps } from "@/shared/types/components";

export default function ActionButton({
  styles,
  variant,
  actionFn,
  children,
}: ActionButtonProps) {
  return (
    <Button className={styles} variant={variant}>
      {children}
    </Button>
  );
}
