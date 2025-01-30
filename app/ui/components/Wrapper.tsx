

export default function Wrapper({ children, }: Readonly<{children: React.ReactNode;}>) {
    return (
        <div className="border-2 border-solid border-fuchsia-600 p-8 min-h-screen">
            {children}
        </div>
    )
};