import { BottomNav } from "@/components/BottomNav";
import { SearchIcon, XIcon } from "lucide-react";
import styled from "styled-components";
import { Conversations } from "../chat";
import { ConversationCard } from "@/components/conversationCard";
import { useEffect, useState } from "react";

interface Search {
  image: string;
  name: string;
  lastMsg: string;
  time: string;
  unreadMsg: string;
  isGroup: boolean;
}

const SearchPage = () => {
  const [filteredChat, setFilteredChat] = useState<Search[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const Result = Conversations.filter((name) =>
    name.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()),
  );

  const people = filteredChat.filter((c) => !c.isGroup);
  const groups = filteredChat.filter((c) => c.isGroup);

  useEffect(() => {
    setFilteredChat(Result);
  }, [searchInput]);

  const clearInput = () => {
    setSearchInput("");
  };

  return (
    <StyledSearchPage>
      <SearchBar>
        <InputWrapper>
          <SearchIcon className="searchIcon" size={24} />
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <XIcon className="Xicon" size={20} onClick={() => clearInput()} />
        </InputWrapper>
      </SearchBar>
      <SearchList>
        {people.length > 0 && (
          <PeopleList>
            <h5>Chats</h5>

            {people.map((c, i) => (
              <SearchCardWrapper key={i}>
                <ConversationCard
                  image={c.image}
                  userName={c.name}
                  lastMsg={c.lastMsg}
                />
              </SearchCardWrapper>
            ))}
          </PeopleList>
        )}

        {groups.length > 0 && (
          <GroupList>
            <h5>Group Chat</h5>

            {groups.map((c, i) => (
              <SearchCardWrapper key={i}>
                <ConversationCard
                  image={c.image}
                  userName={c.name}
                  lastMsg={c.lastMsg}
                />
              </SearchCardWrapper>
            ))}
          </GroupList>
        )}
      </SearchList>
      <BottomNav />
    </StyledSearchPage>
  );
};

export default SearchPage;

const SearchCardWrapper = styled.div`
  width:100%;
  height:auto;
`;
const SearchList = styled.div`
  padding-top: 120px;
  padding-bottom: 130px;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 2rem;

  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and old Edge */
`;

const PeopleList = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 1rem;
`;

const GroupList = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 1rem;
`;

const StyledSearchPage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  padding-inline: 20px;
`;

const SearchBar = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  padding-inline: 20px;
  background-color: ${({ theme }) => theme.colors.primary};

  input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    flex: 1;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 45px;
  background-color: ${({ theme }) => theme.colors.input};
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding-inline: 1rem;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;
