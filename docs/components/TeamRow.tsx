import React from "react";

interface ProfileProps {
  className?: string;
  userTag: string;
  userId: string;
  avatarHash: string;
  githubName?: string;
  twitterName?: string;
}

function getAvatarUrl(userId: string, hash: string) {
  return `https://cdn.discordapp.com/avatars/${userId}/${hash}.png?size=4096`;
}

function getGithubUrl(name: string) {
  return `https://github.com/${name}`;
}

function getTwitterUrl(name: string) {
  return `https://twitter.com/${name}`;
}

function TeamProfileCard({
  className,
  userTag,
  userId,
  avatarHash,
  githubName,
  twitterName,
}: ProfileProps) {
  const githubUrl = getGithubUrl(githubName);
  const twitterUrl = getTwitterUrl(twitterName);

  return (
    <div className={className}>
      <div className="card card--full-height">
        <div className="card__header">
          <div className="avatar avatar--vertical">
            <img
              className="avatar__photo avatar__photo--xl"
              src={getAvatarUrl(userId, avatarHash)}
              alt={`${userTag}'s avatar`}
            />
            <div className="avatar__intro">
              <h3 className="avatar__name">{userTag}</h3>
            </div>
          </div>
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            {githubName && (
              <a
                className="button button--secondary"
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
            {twitterName && (
              <a
                className="button button--secondary"
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamProfileCardCol(props: ProfileProps) {
  return (
    <TeamProfileCard {...props} className={"col col--6 margin-bottom--lg"} />
  );
}

export function CoreTeamRow() {
  return (
    <div className="row">
      <TeamProfileCardCol
        userTag="mrphilip#9041"
        userId="190160914765316096"
        avatarHash="bd202cd2d2f458b79818d8bf105d121d"
        twitterName="y3ll0wLife"
        githubName="y3ll0wlife"
      />
      <TeamProfileCardCol
        userTag="KlukCZ#6589"
        userId="439396770695479297"
        avatarHash="c23d954ac1b70ffd7ac52f4818cb72d1"
        twitterName="KlukCZ"
        githubName="KlukCZ"
      />
      <TeamProfileCardCol
        userTag="wakfi#6999"
        userId="193160566334947340"
        avatarHash="f6fc1aece55d43fd429e5d9d3991bafe"
        githubName="wakfi"
      />
    </div>
  );
}

export function ContributorsRow() {
  return (
    <div className="row">
      <TeamProfileCardCol
        userTag="54D#1357"
        userId="360809274894712833"
        avatarHash="e3e051eaed64e31eeeef20d116e516b8"
      />
      <TeamProfileCardCol
        userTag="Miky88#3229"
        userId="311929179186790400"
        avatarHash="f28ff5e5764f5ff0003acb81acbc934a"
        twitterName="MikyOttantotto"
        githubName="Miky88"
      />
    </div>
  );
}

export function BugHuntersRow() {
  return (
    <div className="row">
      <TeamProfileCardCol
        userTag="Bryth#1086"
        userId="231714802261557249"
        avatarHash="d6e157b42bb5e0211e94639a7b3c5d10"
        twitterName="Brythzz"
      />
    </div>
  );
}

export function TranslatorsRow() {
  return (
    <div className="row">
      <TeamProfileCardCol
        userTag="Just a Regular Talking Box#8289"
        userId="565143645167288340"
        avatarHash="833c16d117b0f6f5168ebdcb4f2bfd05"
      />
      <TeamProfileCardCol
        userTag="KingOfThunder#3023"
        userId="850003505778393128"
        avatarHash="cfdf9b052c71db90c7cf6be6a6f7a4db"
      />
      <TeamProfileCardCol
        userTag="Hachisuka Kiyoko#0001 "
        userId="256422547556401152"
        avatarHash="e5f4308765c2d74d8f5d58f19375fe6e"
        githubName="Shironep"
      />
      <TeamProfileCardCol
        userTag="sim#3745"
        userId="425339165278863380"
        avatarHash="fcdf935500c1fdaca32013c7ab415b71"
        githubName="simonfsvk"
        twitterName="yeaimsimon"
      />
      <TeamProfileCardCol
        userTag="Snowdreas_#0048"
        userId="511158329477693449"
        avatarHash="f517e224cd300e2a9dca5752ebcb3719"
      />
      <TeamProfileCardCol
        userTag="vito7#7786"
        userId="742369927985365042"
        avatarHash="e3a6c61c4c7f1f53a7835274b30aa2a1"
        githubName="vitorlops"
      />
    </div>
  );
}
