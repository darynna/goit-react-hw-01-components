import { ProfileBox, DescriptionBox, Paragraph, ParagraphName, StatsInfo, StatsInfoItems, StatsText, StatsTitle} from "./Profile.styled"

export const Profile = ({username, tag, location, avatar, stats}) => {
return <ProfileBox>
<DescriptionBox>
  <img
    src={avatar}
    width={140}px
    alt="User avatar"
    class="avatar"
  />
  <ParagraphName>{username}</ParagraphName>
  <Paragraph>@{tag}</Paragraph>
  <Paragraph>{location}</Paragraph>
</DescriptionBox>

<StatsInfo>
  <StatsInfoItems>
    <StatsTitle >Followers</StatsTitle>
    <StatsText>{stats.followers}</StatsText>
  </StatsInfoItems>
  <StatsInfoItems>
    <StatsTitle>Views</StatsTitle>
    <StatsText>{stats.views}</StatsText>
  </StatsInfoItems>
  <StatsInfoItems>
    <StatsTitle>Likes</StatsTitle>
    <StatsText>{stats.likes}</StatsText>
  </StatsInfoItems>
</StatsInfo>
</ProfileBox>
}