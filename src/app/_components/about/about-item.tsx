/**
 * 
 * @param param0 
 */

export function AboutItem ({ text, icon }: any) {
    return (
        <button className="outline outline-1 rounded p-5 flex gap-2">
            { icon } 
            { text }
        </button>
    );
}