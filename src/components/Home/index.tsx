import * as React from "react";
import { Edit } from "./QuestEdit";
import { View } from "./QuestView";
import { Row, Col, Button } from "antd";
import Title from "antd/lib/typography/Title";
import { Makimono, SubContainer, Container, Center } from "./styles";

import { useSelector, useDispatch } from "react-redux";
import { State } from "../../store/state";
import { setFrame } from "../../store/index";
import { Dispatch } from "redux";
import * as DomToImage from "dom-to-image";
import Text from "antd/lib/typography/Text";

export const Home = () => {
  const dispatch = useDispatch();
  const image = useSelector((state: State) => state.frame);
  const previewContainer = React.useRef<HTMLDivElement>(null);
  const generateImage = () => {
    const current = previewContainer.current;
    if (current) {
      dispatch(async (dispatch: Dispatch) => {
        const image = await (DomToImage as any).toPng(current);
        image && dispatch(setFrame(image));
      });
    }
  };
  return (
    <React.Fragment>
      <Container>
        <Center>
          <Title>
            モンハンクエスト風ジェネレーター
            <a
              href="https://twitter.com/share?ref_src=twsrc%5Etfw"
              className="twitter-share-button"
              data-text="クエストボードが更新されました"
              data-hashtags="モンハンクエスト風ジェネレーター"
              data-show-count="false"
            >
              Tweet
            </a>
          </Title>
        </Center>
        <Row justify={"center"} gutter={{ md: 0, lg: 16 }}>
          <Col md={24} lg={12}>
            <SubContainer>
              <Center>
                <Title level={2}>編集画面</Title>
              </Center>
              <Edit />
            </SubContainer>
          </Col>
          <Col md={24} lg={12}>
            <SubContainer>
              <Center>
                <Title level={2}>プレビュー</Title>
                <Button onClick={generateImage}>画像を生成する</Button>
                <Text>
                  {(() => {
                    if (image) return "画像と一緒にツイートしてね！";
                    else return "下に画像が出力されるよ";
                  })()}
                </Text>
              </Center>
              <div
                style={{ padding: 24 }}
                ref={previewContainer}
                onClick={generateImage}
              >
                <Makimono>
                  <View />
                </Makimono>
              </div>
            </SubContainer>
          </Col>
        </Row>
        <SubContainer>
          {(() => {
            if (image) return <img src={image} />;
          })()}
        </SubContainer>
      </Container>
    </React.Fragment>
  );
};
