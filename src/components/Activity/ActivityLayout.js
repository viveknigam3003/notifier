import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import ActivityList from "./ActivityList";
import AddRuleButton from "./Rules/AddRuleButton"
import AllRules from "./Rules/AllRules";

function Activity() {
  const [watchrules, setWatchRules] = useState(false);

  function handleChange(e) {
    const ruleState = watchrules;
    setWatchRules(!ruleState);
  }

  return (
    <div style={{ width: "100%" }}>
      <Box
        id="Activity"
        display="flex"
        flexDirection="column"
        alignContent="flex-start"
        paddingTop={0}
        m={1}
        bgcolor="#fffafa"
        css={{ maxWidth: 360, height: 375 }}
      >
        {watchrules ? <AllRules/> : <ActivityList />}
        <AddRuleButton handleChange={handleChange} watchrules={watchrules}/>
      </Box>
    </div>
  );
}

export default Activity;
