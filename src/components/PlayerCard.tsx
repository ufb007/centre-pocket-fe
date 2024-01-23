import React, { useState } from "react";
import { Player } from "../interfaces/Player";
import { Container, Rank, FullName, ProfileUl, ProfileLi, FollowBtn } from "./styled/PlayerCardStyle";

type StatsType = {
    label: string,
    value: number
}

const PlayerCard: React.FC<Player> = function ({ uuid, firstName, lastName, profile }) {
    const [stats, setStats] = useState<StatsType[]>([
       { label: 'Rank', value: profile?.rank ?? 0 },
       { label: 'Matches', value: profile?.matches_played ?? 0 },
       { label: 'Won', value: profile?.matches_won ?? 0 }
    ]);

    return (
        <Container>
            <Rank>{profile?.rank ?? 0}</Rank>
            <div className="p-5 bg-primary text-white font-thin w-full">
                <FullName>{firstName} {lastName}</FullName>
                <ProfileUl>
                    {stats.map(({ label, value }) => {
                        return (
                            <ProfileLi key={label}>
                                <div className="text-3xl">{value}</div>
                                <div className="text-xs uppercase">{label}</div>
                            </ProfileLi>
                        );
                    })}
                </ProfileUl>

                <p className="mt-5"><a href="">Player Profile</a></p>
            </div>

            <FollowBtn>Follow</FollowBtn>
        </Container>
    );
}

export default PlayerCard;