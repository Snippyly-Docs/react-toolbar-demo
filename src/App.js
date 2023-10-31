import {
  VeltComments,
  VeltCommentsSidebar,
  VeltProvider,
  VeltSidebarButton,
  VeltCommentTool,
  VeltHuddle,
  VeltHuddleTool,
  VeltUserRequestTool,
  VeltRecorderTool
} from "@veltdev/react";

function App() {
  // Callback function that is called once Velt SDK is loaded.
  const init = async (client) => {
    if (client) {
      const user = {
        userId: "1",
        name: "John Smith",
        photoUrl: "https://i.pravatar.cc/150?img=5",
        email: "john@trysnippyly.com",
        plan: "free",
        groupId: "",
        contacts: [
          {
            userId: "2",
            name: "Maria Garcia",
            email: "maria@trysnippyly.com"
          },
          {
            userId: "3",
            name: "Sarah Wilson",
            email: "sarah@trysnippyly.com"
          }
        ]
      };

      /**
       * STEP:
       * Provide your user data to login in Velt
       */
      await client.identify(user); // Identify user
      /**
       * STEP:
       * Set document id
       */
      client.setDocumentId("lottiefiles-velt-integration-2"); // Set document id
      const commentElement = client.getCommentElement();
      commentElement.getAllCommentAnnotations().subscribe((comments) => {
        // Do something with comments c
        console.log(comments);
      });
    }
  };

  const yourMethod = (event) => {
    console.log(event);
    return event;
  };
  return (
    <VeltProvider
      apiKey="j3AwoBkuQMTEgeqrmPve"
      onClientLoad={(client) => init(client)}
    >
      <VeltComments suggestionMode={true} dialogOnHover={false} />
      Freestyle, Popover, Stream or Text.
      <VeltHuddle />
      <VeltCommentsSidebar />
      <mytoolbar
        style={{
          display: "flex",
          gap: "4px",
          padding: "2px",
          margin: "4px",
          border: "1px solid black",
          borderRadius: "25px"
        }}
      >
        <VeltCommentTool />
        <VeltSidebarButton />
        <VeltUserRequestTool />
        <VeltHuddleTool type="all" />
        <VeltRecorderTool type="all" />
      </mytoolbar>
      <div style={{ display: "flex" }}>
        Click this to leave a comment anywhere on the page.
        <VeltCommentTool />
      </div>
      <div style={{ display: "flex" }}>
        Click this to see a sidebar of all active comments.
        <VeltSidebarButton />
      </div>
      <div style={{ display: "flex" }}>
        Click this to leave feedback
        <VeltUserRequestTool />
      </div>
      <div style={{ display: "flex" }}>
        Click this to start a huddle.
        <VeltHuddleTool type="all" />
      </div>
      <div style={{ display: "flex" }}>
        Click this to start a recording.
        <VeltRecorderTool type="all" />
      </div>
      <div>
        Highlight <u>this text</u> to leave a comment
      </div>
    </VeltProvider>
  );
}

export default App;
