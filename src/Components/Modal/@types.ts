import { ReactNode } from "react";
import { TModalOptions } from "../../Providers/ModalContext/@types";

type TModalProps = {
    children: ReactNode;
    title: NonNullable<TModalOptions>;
};

export type { TModalProps };
