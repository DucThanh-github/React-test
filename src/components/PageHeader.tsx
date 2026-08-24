import { Link } from 'react-router-dom'

export default function PageHeader({ eyebrow, title, description, action }: { eyebrow: string; title: string; description: string; action?: { label: string; to: string } }) { return <header className="page-header"><div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div>{action && <Link className="button primary" to={action.to}>+ {action.label}</Link>}</header> }
