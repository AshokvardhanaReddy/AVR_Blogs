import { ReactionIcon } from "../components/ReactionIcon";

import {
  FaTwitter,
  FaInstagramSquare,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";

export const SocialMediaPage = () => {
  return (
    <>
      <section >
        <p className=" px-6 sm:px-" >Share This : </p>
        <div className="flex flex-wrap gap-4 px-6 sm:px-1 sm:gap-1  md:gap-2 lg:gap-2">
          <ReactionIcon text="Twitter" icon={<FaTwitter />} />
          <ReactionIcon text="Instagram" icon={<FaInstagramSquare />} />
          <ReactionIcon text="WhatsApp" icon={<FaWhatsapp />} />
          <ReactionIcon text="Facebook" icon={<FaFacebook />} />
        </div>
      </section>
    </>
  );
};
