import styled from "styled-components";
import { PATHS } from "@/routes/paths";
import {
  PhoneCallIcon,
  UserCircle2Icon,
  SettingsIcon,
  LucideMessageCircleMore,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Navigation = [
  {
    url: PATHS.CHAT.HOME,
    icon: <LucideMessageCircleMore size={24} />,
    name: "Message",
  },
  {
    url: PATHS.CALLS.LOGS,
    icon: <PhoneCallIcon size={24} />,
    name: "Calls",
  },
  {
    url: PATHS.CONTACTS.CONTACTlIST,
    icon: <UserCircle2Icon size={24} />,
    name: "Contacts",
  },
  {
    url: PATHS.SETTINGS.SETTING,
    icon: <SettingsIcon size={24} />,
    name: "Settings",
  },
];


export const BottomNav = () => {
  return (
    <BottomNavWrapper>
      {Navigation.map((nav, i) => (
        <StyledNavLink to={nav.url} key={i} end>
          {nav.icon}
          <p>{nav.name}</p>
        </StyledNavLink>
      ))}
    </BottomNavWrapper>
  );
};

const BottomNavWrapper = styled.nav`
  width: 100%;
  height: 11%;
  padding-inline: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding-block: 15px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 3;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const StyledNavLink = styled(NavLink)`
  height: 100%;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  background-color: transparent;

  text-decoration: none;
  transition: 0.2s ease;

  &.active {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
