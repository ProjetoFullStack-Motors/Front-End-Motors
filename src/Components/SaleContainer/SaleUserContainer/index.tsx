import { TSaleContainerProps } from "../@types";
import { UserAvatar } from "../..";
import { Button } from "@mui/material";

const SaleUserContainer = ({ saleFounded }: TSaleContainerProps) => {
  return (
    <div>
      <UserAvatar
        img={saleFounded.user.userImage && saleFounded.user.userImage}
        username={`${saleFounded.user.firstName} ${saleFounded.user.lastName}`}
        size="big"
      />

      <h2>
        {saleFounded.user.firstName} {saleFounded.user.lastName}
      </h2>
      <p>{saleFounded.user.description}</p>
      <Button>Ver todos anúncios</Button>
    </div>
  );
};

export default SaleUserContainer;
