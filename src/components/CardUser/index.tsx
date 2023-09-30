import { Avatar } from "../Avatar";
import { Button } from "../Button";
import * as S from "./styles";
import { Buildings, Link, MapPin, Envelope } from "phosphor-react";
import { Link as LinkRouter } from "react-router-dom";
import user from "../../assets/user.png";

interface CardUserProps {
  items: DataUser;
}

export const CardUser = ({ items }: CardUserProps) => {
  return (
    <S.Container>
      <S.Content>
        <S.WrapperUser>
          {items.avatar_url && (
            <Avatar url={items.avatar_url} alt="imagem do avatar do github" />
          )}

          <div>
            <small>Followers: {items.followers}</small>
            <small>Following: {items.following}</small>
          </div>
        </S.WrapperUser>

        <S.Names>
          <div>
            <span>{items.name}</span>
            <small>
              <S.LinkStyle href={items.html_url} target="_blank">
                <Link />
                {items.login}
              </S.LinkStyle>
            </small>
          </div>
          <div>
            <span>Public repos: {items.public_repos}</span>
          </div>
        </S.Names>

        <S.WrapperInfo>
          {items.company && (
            <span>
              <Buildings /> {items.company}
            </span>
          )}
          {items.blog && (
            <span>
              <Link />
              <a href={items.blog} target="_blank">
                {items.blog}
              </a>
            </span>
          )}
          {items.location && (
            <span>
              <MapPin /> {items.location}
            </span>
          )}
          {items.email && (
            <span>
              <Envelope /> {items.email}
            </span>
          )}
        </S.WrapperInfo>
      </S.Content>
      {items.bio && (
        <S.WrapperBio>
          <hr />
          <span>{items.bio}</span>
        </S.WrapperBio>
      )}
      <S.Footer>
        <LinkRouter to={`/repos`}>
          <Button text="View repos" />
        </LinkRouter>
      </S.Footer>
    </S.Container>
  );
};
