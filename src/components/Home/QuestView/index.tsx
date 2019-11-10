import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../../../store/state";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";
import { Center, Container, SubContainer } from "./styles";

export const View: React.FC = () => {
  const {
    title,
    subtitle,
    difficult,
    requestDetail,
    destination,
    reward,
    contract,
    environment,
    specialCondition,
    client,
    clientNote
  } = useSelector((state: State) => state);
  return (
    <Container>
      <Center>
        <Title level={3}>【{title}】</Title>
        <Paragraph>{subtitle}</Paragraph>
      </Center>
      <SubContainer>
        <Title level={4} style={{ color: "#622625" }}>
          難易度:
          {React.useMemo(() => {
            let star = "";
            for (let i = 0; i < difficult; i++) star += "★";
            for (let i = star.length; i < 10; i++) star += "☆";
            return star;
          }, [difficult])}
        </Title>
        <Title level={4} style={{ color: "#622625" }}>
          【メイン依頼】
        </Title>
        <Paragraph>{requestDetail}</Paragraph>
        <Title level={4} style={{ color: "#622625" }}>
          【目的地】
        </Title>
        <Paragraph>{destination}</Paragraph>
        <Title level={4} style={{ color: "#622625" }}>
          【報酬金】
        </Title>
        <Paragraph>{reward}</Paragraph>
        <Title level={4} style={{ color: "#622625" }}>
          【契約金】
        </Title>
        <Paragraph>{contract}</Paragraph>
        <Title level={4} style={{ color: "#622625" }}>
          【狩猟環境】
        </Title>
        <Paragraph>{environment}</Paragraph>
        <Title level={4} style={{ color: "#622625" }}>
          【特殊条件】
        </Title>
        <Paragraph>{specialCondition}</Paragraph>
        <Title level={4} style={{ color: "#622625" }}>
          【依頼者 {client}】
        </Title>
        <Paragraph>{clientNote}</Paragraph>
      </SubContainer>
    </Container>
  );
};
