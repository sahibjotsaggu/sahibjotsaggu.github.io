import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100px;
  height: auto;
`;

const CardWrapper = styled.div`
  padding: 20px;
  width: calc(100% - 40px);
  height: 100px;
  background-color: #FFF
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  color: #000;
`;

const CardBody = styled.div`
  margin-left: 20px;
  width: 100%;
  position: relative;
`;

const Top = styled.h5`
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Subtitle = styled.h5`
  margin: 0;
  color: #666;
`;

const Bottom = styled.h6`
  text-transform: uppercase;
  color: #999;
  position: absolute;
  bottom: 0;
  margin: 0;
`;

const Link = styled.a`
  margin-top: 10px;
  text-decoration: none;
  display: block;

  &:first-child {
    margin-top: 0;
  }
`;

const Card = ({ image, title, aside, subtitle, bottom, link }) => {
  return (
    <Link
      href={link}
      target="_blank"
    >
      <CardWrapper>
        <Image src={image} />
        <CardBody>
          <Top>
            <div>{title}</div>
          </Top>
          <Subtitle>{subtitle}</Subtitle>
          <Bottom>{bottom}</Bottom>
        </CardBody>
      </CardWrapper>
    </Link>
  )
};

export default Card;
