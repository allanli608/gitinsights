import React, { useState } from "react";
import CommitHistoryScrollbar from "./CommitHistoryScrollbar";
import CommitHistoryContent from "./CommitHistoryContent";
import { CommitHistoryViewProps } from "@/app/__typings/localtypes";

const CommitHistoryView: React.FC<CommitHistoryViewProps> = ({
  commitHistory,
}) => {
  //const [comitSHA, setCommitSHA] = useState<string | null>(null);

  return (
    <div className="flex">
      <div className="flex-1 basis-1/4">
        <CommitHistoryScrollbar commitHistory={commitHistory} />
      </div>
      <div className="flex-1 basis-3/4 px-10 py-6"></div>
    </div>
  );
};

export default CommitHistoryView;
