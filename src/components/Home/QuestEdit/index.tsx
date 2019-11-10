import * as React from "react";
import { Group } from "./styles";
import { Input, Rate } from "antd";
import TextArea from "antd/lib/input/TextArea";
import Text from "antd/lib/typography/Text";

import { State } from "../../../store/state";
import { setState } from "../../../store/index";
import { useDispatch, useSelector } from "react-redux";
export const Edit: React.FC = () => {
  const questBord = useSelector((state: State) => state);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Group>
        <Input
          addonBefore="【"
          addonAfter="】"
          value={questBord.title}
          onChange={event => {
            const {
              target: { value }
            } = event;
            const a = setState("title", value);
            dispatch;
          }}
        />
      </Group>
      <Group>
        <Input
          value={questBord.subtitle}
          onChange={event => {
            const {
              target: { value }
            } = event;
            dispatch(setState("subtitle", value));
          }}
        />
      </Group>
      <Group>
        <Text strong>難易度</Text>
        <Rate
          count={10}
          value={questBord.difficult}
          onChange={value => {
            dispatch(setState("difficult", value));
          }}
        />
      </Group>
      <Group>
        <Text strong>【メイン依頼】</Text>
        <Input
          value={questBord.requestDetail}
          onChange={event => {
            const {
              target: { value }
            } = event;
            dispatch(setState("requestDetail", value));
          }}
        />
      </Group>
      <Group>
        <Text strong>【目的地】</Text>
        <Input
          value={questBord.destination}
          onChange={event => {
            const {
              target: { value }
            } = event;
            dispatch(setState("destination", value));
          }}
        />
      </Group>
      <Group>
        <Text strong>【報酬金】</Text>
        <Input
          value={questBord.reward}
          onChange={event => {
            const {
              target: { value }
            } = event;
            dispatch(setState("reward", value));
          }}
        />
      </Group>
      <Group>
        <Text strong>【契約金】</Text>
        <Input
          value={questBord.contract}
          onChange={event => {
            const {
              target: { value }
            } = event;
            dispatch(setState("contract", value));
          }}
        />
      </Group>
      <Group>
        <Text strong>【狩猟環境】</Text>
        <Input
          value={questBord.environment}
          onChange={event => {
            const {
              target: { value }
            } = event;
            dispatch(setState("environment", value));
          }}
        />
      </Group>
      <Group>
        <Text strong>【特殊条件】</Text>
        <Input
          value={questBord.specialCondition}
          onChange={event => {
            const {
              target: { value }
            } = event;
            dispatch(setState("specialCondition", value));
          }}
        />
      </Group>
      <Group>
        <Input
          addonBefore="【依頼者"
          addonAfter="】"
          style={{ marginBottom: 12 }}
          value={questBord.client}
          onChange={event => {
            const {
              target: { value }
            } = event;
            dispatch(setState("client", value));
          }}
        />
        <TextArea
          placeholder="備考"
          value={questBord.clientNote}
          onChange={event => {
            const {
              target: { value }
            } = event;
            dispatch(setState("clientNote", value));
          }}
        />
      </Group>
    </React.Fragment>
  );
};
