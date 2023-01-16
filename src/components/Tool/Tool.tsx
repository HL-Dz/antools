import { FC } from "react";
import { TTool } from "../../types/types";

import Button from "../Buttons/Button";

const Tool: FC<TTool> = (
  // { id, img, name, plan, body, selected },
  props
) => {
  let selectedTool = props.selected ? " tool-active" : "";
  return (
    <div className={`tool flex-column${selectedTool}`}>
      <div className="tool__top">
        <div className="tool__pic">
          <img src={props.img} alt={props.name} className="tool__img" />
        </div>
        <div className="tool__desc">
          <div className="tool__name">{props.name}</div>
          <div className="tool_plan">{props.plan}</div>
        </div>
      </div>
      <div className="tool__center">{props.body}</div>
      <div className="tool__bottom">
        <div className="heart-wrap" onClick={() => props.selectTool(props.id)}>
          <svg
            width="26"
            height="22"
            viewBox="0 0 26 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="heart-img"
          >
            <path
              d="M18.8334 0.25C16.3834 0.25 14.225 1.475 13 3.4C11.775 1.475 9.61669 0.25 7.16669 0.25C3.31669 0.25 0.166687 3.4 0.166687 7.25C0.166687 14.1917 13 21.25 13 21.25C13 21.25 25.8334 14.25 25.8334 7.25C25.8334 3.4 22.6834 0.25 18.8334 0.25Z"
              fill="white"
              fillOpacity="0.38"
            />
          </svg>
        </div>
        <div className="folder-wrap">
          <svg
            width="26"
            height="22"
            viewBox="0 0 26 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="folder-img"
          >
            <path
              d="M22.375 4.81249H13.625L10.3375 0.837489C10.2212 0.694097 10.0745 0.578254 9.90812 0.498286C9.7417 0.418318 9.55963 0.37621 9.375 0.374989H3.625C2.80826 0.364962 2.02083 0.678982 1.43512 1.24829C0.849416 1.8176 0.513166 2.59579 0.5 3.41249V18.5875C0.513166 19.4042 0.849416 20.1824 1.43512 20.7517C2.02083 21.321 2.80826 21.635 3.625 21.625H22.375C23.1917 21.635 23.9792 21.321 24.5649 20.7517C25.1506 20.1824 25.4868 19.4042 25.5 18.5875V7.84999C25.4868 7.03329 25.1506 6.2551 24.5649 5.68579C23.9792 5.11648 23.1917 4.80246 22.375 4.81249V4.81249ZM23 18.5625C22.9953 18.6392 22.9753 18.7142 22.9411 18.783C22.9069 18.8518 22.8593 18.9131 22.801 18.9632C22.7427 19.0133 22.675 19.0512 22.6019 19.0747C22.5287 19.0982 22.4515 19.1068 22.375 19.1H3.625C3.54846 19.1068 3.47132 19.0982 3.39815 19.0747C3.32498 19.0512 3.25726 19.0133 3.199 18.9632C3.14073 18.9131 3.0931 18.8518 3.05892 18.783C3.02474 18.7142 3.00471 18.6392 3 18.5625V3.41249C3.00471 3.33578 3.02474 3.2608 3.05892 3.19197C3.0931 3.12315 3.14073 3.06187 3.199 3.01176C3.25726 2.96165 3.32498 2.92373 3.39815 2.90024C3.47132 2.87675 3.54846 2.86816 3.625 2.87499H8.7875L12.0375 6.84999C12.1538 6.99338 12.3005 7.10922 12.4669 7.18919C12.6333 7.26916 12.8154 7.31127 13 7.31249H22.375C22.4515 7.30566 22.5287 7.31425 22.6019 7.33774C22.675 7.36123 22.7427 7.39915 22.801 7.44926C22.8593 7.49937 22.9069 7.56065 22.9411 7.62947C22.9753 7.6983 22.9953 7.77328 23 7.84999V18.5625Z"
              fill="white"
              fillOpacity="0.38"
            />
          </svg>
        </div>
        <Button text="Visit" type="secondary" cls="button-visit" />
      </div>
    </div>
  );
};

export default Tool;
