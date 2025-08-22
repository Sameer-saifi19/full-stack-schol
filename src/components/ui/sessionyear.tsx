export default function SessionYear({ session }: { session: string }) {
    return <div className="rounded-xl flex justify-center items-center px-4 py-2 bg-accent w-16 ">
        <h2 className="text-xs font-medium">{session}</h2>
    </div>
}