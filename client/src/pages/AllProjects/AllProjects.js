import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../../utils/queries';
import { Link } from 'react-router-dom';
import './AllProjects.css';

const AllProjects = () => {

    const { loading, error, data } = useQuery(GET_PROJECTS);
    console.log('data:', data)

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>

    return (
        <div>
            <p>All Projects</p>
            {data.getProjects.map(project => (
                <Link to={`project/${project.id}`} className='all-project-card' key={project.id}>
                    <p>{project.description}</p>
                    <p>{project.startDate}</p>
                    <p>{project.endDate}</p>
                    <p>{project.projectType}</p>
                    <p>{project.paid}</p>
                    <p>{project.paymentType}</p>
                    <p>{project.images}</p>
                </Link>
            ))}
        </div>
    )
}

export default AllProjects;

