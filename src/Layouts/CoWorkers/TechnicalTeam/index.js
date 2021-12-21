import React, {useState} from 'react';
import BreadCrump from '@Components/Shared/BreadCrump/BreadCrump';
import Link from '@Components/Shared/Buttons/Link';
import Title from '@Components/Shared/Title';
import useFetch from "../../../Context/useFetch";

function Index() {
    const [teams, setTeams] = useState([]);
    const [teamsLoading, setTeamsLoading] = useState(true);

    const setData = (data) => {
        setTeams(data);
        setTeamsLoading(false);
    };

    const getTechnicalTeams = useFetch({
        url: `TechnicsService`,
        noHeader: true,
        method: "GET",
        setter: setData,
    });

    return (
        <div className='Technicalteam container'>
            <BreadCrump/>
            <Title>Technical Team</Title>
            {!teamsLoading ? (
                <div className='Technicalteam__content'>
                    {teams.results.map((team) => (
                        <div
                            className='Technicalteam__Box flex justify-between items-center w-full'
                            key={team.id}
                        >
                            <div className='Technicalteam__txt flex items-center justify-between'>
                                <Link to='information'
                                      state={{
                                          technic_name: team.technic_name,
                                          technic_level: team.technic_level,
                                      }}
                                      type='text'>
                                    Details
                                </Link>

                                <p>{team.technic_level}</p>
                            </div>
                            <p>{team.technic_name}</p>
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    );
}

export default Index;

const items = [
    {
        title: 'Front-End developer',
        level: 'Senior',
    },
    {
        title: 'Back-End developer',
        level: 'Senior',
    },
    {
        title: 'UX designer',
        level: 'Beginner',
    },
    {
        title: 'UI designer',
        level: 'Intern',
    },
    {
        title: 'JavaScript Developer',
        level: 'Senior',
    },
    {
        title: 'Software engineer',
        level: 'Senior',
    },
    {
        title: 'UX researcher',
        level: 'Beginner',
    },
    {
        title: 'UX writer',
        level: 'Intern',
    },
];
