// import { useDelay } from "lib/Hooks";
import React, { useEffect, useState } from "react";

import * as IMGUR from "./style";

const CommentsForm = ({ setComments }) => {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isSending, setIsSending] = useState(false);

  const counterChecker = 140;

  useEffect(() => {
    if (input.length > counterChecker) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [input.length]);

  const areaHandler = async (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      if (!input.length) {
        return;
      }
      setIsSending(true);
      // await useDelay(500);
      setComments((prev) => {
        const finalArray = [...prev];
        finalArray.unshift({
          content: input,
          id: new Date().getTime(),
          date: new Date(),
        });
        return finalArray;
      });
      setIsSending(false);
      setInput("");
    }
  };

  return (
    <IMGUR.formWrapper>
      <IMGUR.form>
        <IMGUR.commentAreaWrapper>
          <IMGUR.commentArea
            onKeyDown={areaHandler}
            valid={isValid}
            placeholder="Write a comment"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </IMGUR.commentAreaWrapper>
        <IMGUR.SubmitWrapper>
          <IMGUR.LinkToRules href="https://imgur.com/rules" target="_blank">
            Read the community rules
          </IMGUR.LinkToRules>
          <IMGUR.SymbolCounter valid={isValid}>
            {counterChecker - input.length}
          </IMGUR.SymbolCounter>
          <IMGUR.SubmitBtn
            type="submit"
            disabled={!(input.length > 0 && input.length <= counterChecker)}
          >
            {isSending ? <IMGUR.spinner /> : "Post"}
          </IMGUR.SubmitBtn>
        </IMGUR.SubmitWrapper>
      </IMGUR.form>
    </IMGUR.formWrapper>
  );
};

export default CommentsForm;
