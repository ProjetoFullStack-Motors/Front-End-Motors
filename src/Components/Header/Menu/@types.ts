type TMenuProps = {
  open: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  menuRef: React.MutableRefObject<any>;
};

type TMenuStyleProps = {
  open: boolean;
};

export type { TMenuProps, TMenuStyleProps };
