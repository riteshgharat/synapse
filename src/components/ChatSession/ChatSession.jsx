import React from "react";
import UserChat from "./Chats/UserChat";
import AIChat from "./Chats/AIChat";
import Logo from "../../assets/Logo.png";

function ChatWindow() {
  return (
    <div className="w-full h-full pt-12 md:pt-0 flex flex-col flex-grow items-center gap-3 bg-Primary Add-Scrollbar">
      <div className="w-full h-full md:w-3/4">
        <UserChat message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit omnis veniam nemo, odit, cum reprehenderit dolorum nostrum voluptas fugiat possimus asperiores iure excepturi odio quaerat non voluptatum, mollitia sint officia? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, expedita nulla iure excepturi facilis in consectetur. Iste odit, doloremque facilis sapiente dolores maiores possimus? Culpa laborum est consequuntur facere." />
        <AIChat
          profileImg={Logo}
          message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit omnis veniam nemo, odit, cum reprehenderit dolorum nostrum voluptas fugiat possimus asperiores iure excepturi odio quaerat non voluptatum, mollitia sint officia? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, expedita nulla iure excepturi facilis in consectetur. Iste odit, doloremque facilis sapiente dolores maiores possimus? Culpa laborum est consequuntur facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit omnis veniam nemo, odit, cum reprehenderit dolorum nostrum voluptas fugiat possimus asperiores iure excepturi odio quaerat non voluptatum, mollitia sint officia? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, expedita nulla iure excepturi facilis in consectetur. Iste odit, doloremque facilis sapiente dolores maiores possimus? Culpa laborum est consequuntur facere."
        />
        <UserChat message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit omnis veniam nemo, odit, cum reprehenderit dolorum nostrum voluptas fugiat possimus asperiores iure excepturi odio quaerat non voluptatum, mollitia sint officia? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, expedita nulla iure excepturi facilis in consectetur. Iste odit, doloremque facilis sapiente dolores maiores possimus? Culpa laborum est consequuntur facere." />
        <AIChat
          profileImg={Logo}
          message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit omnis veniam nemo, odit, cum reprehenderit dolorum nostrum voluptas fugiat possimus asperiores iure excepturi odio quaerat non voluptatum, mollitia sint officia? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, expedita nulla iure excepturi facilis in consectetur. Iste odit, doloremque facilis sapiente dolores maiores possimus? Culpa laborum est consequuntur facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit omnis veniam nemo, odit, cum reprehenderit dolorum nostrum voluptas fugiat possimus asperiores iure excepturi odio quaerat non voluptatum, mollitia sint officia? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, expedita nulla iure excepturi facilis in consectetur. Iste odit, doloremque facilis sapiente dolores maiores possimus? Culpa laborum est consequuntur facere."
        />
        <UserChat message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit omnis veniam nemo, odit, cum reprehenderit dolorum nostrum voluptas fugiat possimus asperiores iure excepturi odio quaerat non voluptatum, mollitia sint officia? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, expedita nulla iure excepturi facilis in consectetur. Iste odit, doloremque facilis sapiente dolores maiores possimus? Culpa laborum est consequuntur facere." />
        <AIChat
          profileImg={Logo}
          message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit omnis veniam nemo, odit, cum reprehenderit dolorum nostrum voluptas fugiat possimus asperiores iure excepturi odio quaerat non voluptatum, mollitia sint officia? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, expedita nulla iure excepturi facilis in consectetur. Iste odit, doloremque facilis sapiente dolores maiores possimus? Culpa laborum est consequuntur facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit omnis veniam nemo, odit, cum reprehenderit dolorum nostrum voluptas fugiat possimus asperiores iure excepturi odio quaerat non voluptatum, mollitia sint officia? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, expedita nulla iure excepturi facilis in consectetur. Iste odit, doloremque facilis sapiente dolores maiores possimus? Culpa laborum est consequuntur facere."
        />
      </div>
    </div>
  );
}

export default ChatWindow;
