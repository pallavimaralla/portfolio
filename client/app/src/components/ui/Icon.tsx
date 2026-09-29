import React from 'react';
import {
  FiBriefcase, FiCalendar, FiMapPin, FiChevronDown, FiChevronUp,
  FiShield, FiTv, FiGithub, FiExternalLink, FiFolder, FiCode,
  FiLayout, FiServer, FiCloud, FiDatabase, FiTool, FiLayers,
  FiZap, FiBook, FiAward, FiSend, FiMail, FiLinkedin,
  FiDownload, FiArrowDown, FiMenu, FiX,
} from 'react-icons/fi';

export type IconName =
  | 'FiBriefcase' | 'FiCalendar' | 'FiMapPin' | 'FiChevronDown' | 'FiChevronUp'
  | 'FiShield' | 'FiTv' | 'FiGithub' | 'FiExternalLink' | 'FiFolder'
  | 'FiCode' | 'FiLayout' | 'FiServer' | 'FiCloud' | 'FiDatabase' | 'FiTool'
  | 'FiLayers' | 'FiZap' | 'FiBook' | 'FiAward' | 'FiSend' | 'FiMail'
  | 'FiLinkedin' | 'FiDownload' | 'FiArrowDown' | 'FiMenu' | 'FiX';

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const iconMap: Record<IconName, any> = {
  FiBriefcase, FiCalendar, FiMapPin, FiChevronDown, FiChevronUp,
  FiShield, FiTv, FiGithub, FiExternalLink, FiFolder,
  FiCode, FiLayout, FiServer, FiCloud, FiDatabase, FiTool,
  FiLayers, FiZap, FiBook, FiAward, FiSend, FiMail,
  FiLinkedin, FiDownload, FiArrowDown, FiMenu, FiX,
};

export const Icon: React.FC<IconProps> = ({ name, size = 18, className, style }) => {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  return <IconComponent size={size} className={className} style={style} />;
};
