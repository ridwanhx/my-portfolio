import SkillBadge from './SkillBadge';

const SkillRow = ({ skills, direction = 'left', rowId }) => {
    const animationClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';

    return (
        <div className="flex overflow-hidden group">
            <div className={`flex gap-4 w-max ${animationClass} group-hover:[animation-play-state:paused]`}>
                {[...skills, ...skills].map((skill, index) => (
                    <SkillBadge 
                        skill={skill} 
                        key={`${rowId}-${index}`} 
                    />
                ))}
            </div>
        </div>
    );
};

export default SkillRow;
