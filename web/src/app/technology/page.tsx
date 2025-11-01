"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"

function TechnologyPageContent() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [isExpertMode, setIsExpertMode] = useState(
        searchParams.get("mode") === "expert",
    )

    useEffect(() => {
        const mode = searchParams.get("mode")
        if (mode === "expert") {
            setIsExpertMode(true)
        } else if (mode === "user") {
            setIsExpertMode(false)
        }
    }, [searchParams])

    const handleModeChange = (expertMode: boolean) => {
        setIsExpertMode(expertMode)
        const newMode = expertMode ? "expert" : "user"
        router.push(`/technology?mode=${newMode}`, { scroll: false })
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/50 via-purple-50/30 to-white">
                <div
                    className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
                    aria-hidden="true"
                ></div>
                <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        {/* Expert Mode Toggle - TLDR at top */}
                        <div className="mb-12 flex flex-col items-center">
                            <p className="mb-4 text-sm text-slate-600">
                                Choose your experience level:
                            </p>
                            <div className="inline-flex rounded-full border-2 border-indigo-200 bg-white p-1 shadow-sm">
                                <button
                                    onClick={() => handleModeChange(false)}
                                    className={`group relative cursor-pointer rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:outline-none ${
                                        !isExpertMode
                                            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                                            : "text-slate-700 hover:text-slate-900"
                                    }`}
                                    aria-pressed={!isExpertMode}
                                    title="Simple explanations for understanding the core technology"
                                >
                                    I&apos;m a User
                                    <span className="absolute bottom-full left-1/2 mb-2 hidden w-max max-w-xs -translate-x-1/2 rounded-lg bg-slate-900 px-3 py-2 text-xs text-white shadow-lg group-hover:block">
                                        Simple explanations for understanding
                                        the core technology
                                    </span>
                                </button>
                                <button
                                    onClick={() => handleModeChange(true)}
                                    className={`group relative cursor-pointer rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:outline-none ${
                                        isExpertMode
                                            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                                            : "text-slate-700 hover:text-slate-900"
                                    }`}
                                    aria-pressed={isExpertMode}
                                    title="Detailed technical analysis with research-level depth"
                                >
                                    I&apos;m an Expert
                                    <span className="absolute bottom-full left-1/2 mb-2 hidden w-max max-w-xs -translate-x-1/2 rounded-lg bg-slate-900 px-3 py-2 text-xs text-white shadow-lg group-hover:block">
                                        Detailed technical analysis with
                                        research-level depth
                                    </span>
                                </button>
                            </div>
                            <p className="mt-3 max-w-md text-center text-xs text-slate-500 transition-all duration-300">
                                {isExpertMode
                                    ? "Detailed technical analysis with research-level depth"
                                    : "Simple explanations for understanding the core technology"}
                            </p>
                        </div>

                        <h1 className="mt-8 text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl">
                            Engineering
                            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Precision
                            </span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-slate-700">
                            A research-level exploration of the technology
                            powering the world&apos;s first open-source
                            high-frequency graphics tablet.
                        </p>
                    </div>
                </div>
            </section>

            {/* Abstract Section */}
            <div
                key={isExpertMode ? "expert" : "user"}
                className="transition-all duration-500 ease-in-out"
            >
                {isExpertMode ? (
                    // Expert View
                    <section
                        className="animate-fade-in py-24 sm:py-32"
                        aria-labelledby="abstract-heading"
                    >
                        <div className="mx-auto max-w-5xl px-6 lg:px-8">
                            <div className="mx-auto max-w-3xl">
                                <div className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-purple-50/50 to-pink-50/50 px-8 py-12 shadow-sm sm:px-12">
                                    <h2
                                        id="abstract-heading"
                                        className="mb-6 text-3xl font-bold tracking-tight text-slate-900"
                                    >
                                        Abstract
                                    </h2>
                                    <div className="prose prose-slate max-w-none">
                                        <p className="text-lg leading-relaxed text-slate-800">
                                            The Pompyboard represents a paradigm
                                            shift in graphics tablet technology.
                                            An open-source hardware project
                                            engineered for extreme performance,
                                            targeting an unprecedented{" "}
                                            <strong className="text-indigo-700">
                                                8000Hz USB polling rate
                                            </strong>{" "}
                                            with second-generation prototypes
                                            achieving a robust 1000Hz
                                            foundation. Designed specifically
                                            for the demanding, low-latency
                                            requirements of rhythm gaming, the
                                            Pompyboard tackles fundamental
                                            challenges in magnetic sensing,
                                            high-speed signal acquisition, and
                                            power-efficient analog circuit
                                            design.
                                        </p>
                                        <p className="mt-4 text-base leading-relaxed text-slate-700">
                                            This technical analysis examines the
                                            engineering decisions, trade-offs,
                                            and innovations across three
                                            critical domains: magnetic sensing
                                            modality, signal acquisition
                                            architecture, and
                                            power/hardware-level noise
                                            mitigation strategies. Each section
                                            integrates peer-reviewed concepts
                                            with practical implementation
                                            details from the development
                                            process.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    // Simplified User View - Abstract
                    <section className="animate-fade-in bg-white py-24">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto mb-16 max-w-3xl text-center">
                                <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                                    Why It&apos;s Better
                                </h2>
                                <p className="text-lg text-slate-700">
                                    The tech that makes your aim better
                                </p>
                            </div>

                            <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 text-white shadow-2xl sm:p-12">
                                <p className="mb-8 text-xl leading-relaxed text-slate-200 sm:text-2xl">
                                    Your pen has a magnet. The tablet has
                                    sensors that detect where that magnet is.
                                    That&apos;s it. No weird hover technology,
                                    no batteries dying mid-stream, just magnets
                                    doing their thing. It&apos;s like if your
                                    cursor actually went where you
                                    pointed—crazy, right?
                                </p>

                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div className="flex flex-col rounded-xl border border-slate-700 bg-slate-800/70 p-6">
                                        <div className="mb-3 text-4xl">🎯</div>
                                        <h3 className="mb-2 text-xl font-bold">
                                            Actually Accurate
                                        </h3>
                                        <p className="text-slate-300">
                                            Less than 0.5mm tracking error. Your
                                            missed jumps are 100% your fault
                                            now, sorry.
                                        </p>
                                    </div>

                                    <div className="flex flex-col rounded-xl border border-slate-700 bg-slate-800/70 p-6">
                                        <div className="mb-3 text-4xl">⚡</div>
                                        <h3 className="mb-2 text-xl font-bold">
                                            Zero Input Lag
                                        </h3>
                                        <p className="text-slate-300">
                                            1000Hz polling rate (working on
                                            8000Hz). Basically instant. Your
                                            tablet won&apos;t be the reason you
                                            can&apos;t FC.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Core Technology Section */}
                {isExpertMode ? (
                    // Expert View - Full Technical Details
                    <section
                        className="bg-gradient-to-b from-white via-purple-50/20 to-white py-24"
                        aria-labelledby="sensing-heading"
                    >
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto mb-16 max-w-3xl text-center">
                                <h2
                                    id="sensing-heading"
                                    className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
                                >
                                    Magnetic Sensing Modality
                                </h2>
                                <p className="text-lg text-slate-700">
                                    The foundation of precision tracking: Hall
                                    effect sensors
                                </p>
                            </div>

                            {/* Physics Background */}
                            <div className="mx-auto mb-16 max-w-4xl">
                                <div className="rounded-3xl border border-purple-100 bg-gradient-to-br from-purple-50 via-indigo-50/50 to-pink-50/50 p-8 shadow-sm sm:p-12">
                                    <h3 className="mb-6 text-2xl font-bold text-slate-900">
                                        Physical Principles
                                    </h3>
                                    <div className="space-y-6 text-slate-800">
                                        <div>
                                            <h4 className="mb-2 font-semibold text-purple-900">
                                                Magnetic Field Detection
                                            </h4>
                                            <p className="leading-relaxed">
                                                Position sensing in the
                                                Pompyboard relies on detecting
                                                the three-dimensional magnetic
                                                field vector generated by a
                                                neodymium magnet embedded in the
                                                pen tip. As the pen moves across
                                                the sensor array, each sensor
                                                measures the local magnetic flux
                                                density (<em>B</em>), typically
                                                in the range of 10-1000 Gauss
                                                depending on proximity. The
                                                sensor array uses triangulation
                                                algorithms to reconstruct the
                                                pen&apos;s X-Y coordinates and
                                                Z-axis (hover) distance with
                                                sub-millimeter precision.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="mb-2 font-semibold text-purple-900">
                                                Magnetic Dipole Field Behavior
                                            </h4>
                                            <p className="leading-relaxed">
                                                The magnetic field strength
                                                follows an inverse cube law
                                                relationship with distance:
                                                <em className="my-2 block text-center text-indigo-800">
                                                    {" "}
                                                    B ∝ 1/r³
                                                </em>
                                                This rapid falloff creates a
                                                natural &quot;sensitivity
                                                gradient&quot; where sensors
                                                directly beneath the pen receive
                                                strong signals while distant
                                                sensors see minimal field
                                                strength. This characteristic
                                                enables excellent spatial
                                                resolution but demands high
                                                dynamic range in the sensing
                                                electronics.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hall Effect Sensors */}
                            <div className="mb-16">
                                {/* Hall Effect Card */}
                                <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-white p-8 shadow-lg ring-1 ring-indigo-100 transition-shadow duration-300 hover:shadow-xl">
                                    <div
                                        className="absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-gradient-to-br from-indigo-500/10 to-transparent"
                                        aria-hidden="true"
                                    />
                                    <div className="relative">
                                        <div
                                            className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-700 shadow-md"
                                            aria-hidden="true"
                                        >
                                            <svg
                                                className="h-6 w-6 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2.5}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                                />
                                            </svg>
                                        </div>
                                        <h3 className="mb-4 text-2xl font-bold text-slate-900">
                                            Hall Effect Sensors
                                            <span className="ml-3 inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-800">
                                                Selected
                                            </span>
                                        </h3>

                                        <div className="mb-6">
                                            <h4 className="mb-3 text-sm font-semibold tracking-wide text-slate-900 uppercase">
                                                Operating Principle
                                            </h4>
                                            <p className="leading-relaxed text-slate-700">
                                                Hall effect sensors exploit the
                                                Lorentz force acting on charge
                                                carriers in a conductor. When a
                                                current-carrying semiconductor
                                                (typically InSb or GaAs) is
                                                placed in a magnetic field{" "}
                                                <em>B</em>, the Lorentz force
                                                deflects electrons perpendicular
                                                to both the current direction
                                                and field. This charge
                                                accumulation creates the Hall
                                                voltage:
                                            </p>
                                            <p className="my-3 text-center font-mono text-sm text-indigo-800">
                                                V<sub>H</sub> = (I × B × d) / (n
                                                × e × t)
                                            </p>
                                            <p className="text-sm leading-relaxed text-slate-700">
                                                where <em>I</em> is bias
                                                current, <em>d</em> is sensor
                                                width, <em>n</em> is carrier
                                                density, <em>e</em> is electron
                                                charge, and <em>t</em> is
                                                thickness. This voltage is
                                                directly proportional to
                                                magnetic field strength,
                                                providing continuous analog
                                                output with excellent linearity
                                                across a wide range (typically
                                                ±200 Gauss or more).
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="mb-2 flex items-center text-sm font-semibold text-green-800">
                                                    <span
                                                        className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100"
                                                        aria-hidden="true"
                                                    >
                                                        <svg
                                                            className="h-3 w-3 text-green-700"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </span>
                                                    Advantages
                                                </h4>
                                                <ul className="space-y-2 text-sm text-slate-700">
                                                    <li className="flex items-start">
                                                        <span
                                                            className="mr-2 text-indigo-600"
                                                            aria-hidden="true"
                                                        >
                                                            ▸
                                                        </span>
                                                        <span>
                                                            <strong>
                                                                Wide dynamic
                                                                range:
                                                            </strong>{" "}
                                                            Linear operation
                                                            from 5-500+ Gauss
                                                            enables robust
                                                            detection across
                                                            varying pen heights
                                                        </span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span
                                                            className="mr-2 text-indigo-600"
                                                            aria-hidden="true"
                                                        >
                                                            ▸
                                                        </span>
                                                        <span>
                                                            <strong>
                                                                Mature
                                                                technology:
                                                            </strong>{" "}
                                                            Decades of
                                                            development,
                                                            multiple suppliers,
                                                            standardized
                                                            packages
                                                        </span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span
                                                            className="mr-2 text-indigo-600"
                                                            aria-hidden="true"
                                                        >
                                                            ▸
                                                        </span>
                                                        <span>
                                                            <strong>
                                                                Cost-effective:
                                                            </strong>{" "}
                                                            Volume pricing
                                                            typically $0.10-0.30
                                                            per sensor enabling
                                                            dense arrays
                                                        </span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span
                                                            className="mr-2 text-indigo-600"
                                                            aria-hidden="true"
                                                        >
                                                            ▸
                                                        </span>
                                                        <span>
                                                            <strong>
                                                                Continuous
                                                                output:
                                                            </strong>{" "}
                                                            True analog signal
                                                            simplifies
                                                            interpolation
                                                            algorithms
                                                        </span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span
                                                            className="mr-2 text-indigo-600"
                                                            aria-hidden="true"
                                                        >
                                                            ▸
                                                        </span>
                                                        <span>
                                                            <strong>
                                                                Temperature
                                                                compensation:
                                                            </strong>{" "}
                                                            Modern sensors
                                                            include on-chip
                                                            temperature
                                                            correction
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div>
                                                <h4 className="mb-2 flex items-center text-sm font-semibold text-amber-800">
                                                    <span
                                                        className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-100"
                                                        aria-hidden="true"
                                                    >
                                                        <svg
                                                            className="h-3 w-3 text-amber-700"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </span>
                                                    Trade-offs
                                                </h4>
                                                <ul className="space-y-2 text-sm text-slate-700">
                                                    <li className="flex items-start">
                                                        <span
                                                            className="mr-2 text-amber-600"
                                                            aria-hidden="true"
                                                        >
                                                            ▸
                                                        </span>
                                                        <span>
                                                            <strong>
                                                                Lower
                                                                sensitivity:
                                                            </strong>{" "}
                                                            Typical 1-5 mV/Gauss
                                                            requires
                                                            amplification,
                                                            introducing noise
                                                        </span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span
                                                            className="mr-2 text-amber-600"
                                                            aria-hidden="true"
                                                        >
                                                            ▸
                                                        </span>
                                                        <span>
                                                            <strong>
                                                                Offset drift:
                                                            </strong>{" "}
                                                            0.1-1 Gauss/°C
                                                            thermal drift
                                                            necessitates dynamic
                                                            calibration
                                                        </span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span
                                                            className="mr-2 text-amber-600"
                                                            aria-hidden="true"
                                                        >
                                                            ▸
                                                        </span>
                                                        <span>
                                                            <strong>
                                                                Power
                                                                consumption:
                                                            </strong>{" "}
                                                            Continuous bias
                                                            current (5-20 mA
                                                            typical) for array
                                                            of 100+ sensors
                                                        </span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span
                                                            className="mr-2 text-amber-600"
                                                            aria-hidden="true"
                                                        >
                                                            ▸
                                                        </span>
                                                        <span>
                                                            <strong>
                                                                Noise floor:
                                                            </strong>{" "}
                                                            Johnson-Nyquist
                                                            thermal noise limits
                                                            resolution to
                                                            ~0.1-0.5 Gauss
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Design Decision Summary */}
                            <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-8 text-white shadow-xl sm:p-12">
                                <h3 className="mb-4 text-2xl font-bold">
                                    Engineering Decision Matrix
                                </h3>
                                <p className="mb-6 text-lg leading-relaxed text-indigo-50">
                                    The selection of Hall effect sensors
                                    represents a pragmatic engineering
                                    compromise, balancing multiple competing
                                    constraints in the design space:
                                </p>
                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                    <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                                        <div className="mb-1 text-3xl font-bold text-indigo-200">
                                            ✓
                                        </div>
                                        <div className="mb-1 font-semibold">
                                            Manufacturability
                                        </div>
                                        <div className="text-sm text-indigo-100">
                                            Established supply chains, multiple
                                            vendors
                                        </div>
                                    </div>
                                    <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                                        <div className="mb-1 text-3xl font-bold text-purple-200">
                                            $
                                        </div>
                                        <div className="mb-1 font-semibold">
                                            Cost-Effectiveness
                                        </div>
                                        <div className="text-sm text-indigo-100">
                                            10-70× lower per-sensor cost enables
                                            dense arrays
                                        </div>
                                    </div>
                                    <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                                        <div className="mb-1 text-3xl font-bold text-pink-200">
                                            ⚡
                                        </div>
                                        <div className="mb-1 font-semibold">
                                            Robust Dynamic Range
                                        </div>
                                        <div className="text-sm text-indigo-100">
                                            Wide linear region prevents
                                            saturation
                                        </div>
                                    </div>
                                    <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                                        <div className="mb-1 text-3xl font-bold text-purple-200">
                                            ⚙
                                        </div>
                                        <div className="mb-1 font-semibold">
                                            Proven Performance
                                        </div>
                                        <div className="text-sm text-indigo-100">
                                            Meets competitive gaming latency
                                            requirements
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    // Simplified User View - Core Technology
                    <section className="bg-gradient-to-b from-slate-50 to-white py-24">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto mb-16 max-w-3xl text-center">
                                <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                                    How It Works
                                </h2>
                                <p className="text-lg text-slate-700">
                                    The magnet thing explained
                                </p>
                            </div>

                            <div className="mx-auto max-w-4xl space-y-8">
                                {/* Simple explanation */}
                                <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 text-white shadow-2xl sm:p-12">
                                    <h3 className="mb-6 text-3xl font-bold">
                                        It&apos;s Just Magnets
                                    </h3>
                                    <p className="mb-8 text-lg leading-relaxed text-slate-200">
                                        Pen has magnet. Tablet has sensors that
                                        detect magnet. Done.
                                    </p>
                                    <p className="text-lg leading-relaxed text-slate-200">
                                        When you move the pen, sensors measure
                                        how strong the magnetic field is. Closer
                                        to a sensor = stronger signal. The
                                        tablet checks like 40+ sensors at once
                                        and figures out exactly where your pen
                                        is. It&apos;s basically triangulation
                                        but with magnets instead of GPS.
                                    </p>
                                </div>

                                {/* Sensor info card */}
                                <div className="mx-auto max-w-2xl">
                                    <div className="rounded-2xl border border-indigo-200/60 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 shadow-sm">
                                        <div className="mb-4 flex items-center">
                                            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-2xl text-white">
                                                📱
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-900">
                                                Hall Effect Sensors
                                            </h3>
                                        </div>
                                        <p className="mb-4 text-slate-800">
                                            Reliable, proven technology. Work
                                            great, cheaper to make, what we use
                                            in Pompyboard.
                                        </p>
                                        <ul className="space-y-2 text-slate-700">
                                            <li className="flex items-start">
                                                <span className="mr-2 text-green-600">
                                                    ✓
                                                </span>
                                                <span>Lower cost</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="mr-2 text-green-600">
                                                    ✓
                                                </span>
                                                <span>Still accurate AF</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="mr-2 text-green-600">
                                                    ✓
                                                </span>
                                                <span>Proven tech</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Why it matters */}
                                <div className="rounded-3xl border border-green-200/60 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-8 shadow-sm">
                                    <h3 className="mb-4 text-2xl font-bold text-slate-900">
                                        Why This Slaps
                                    </h3>
                                    <div className="space-y-4 text-slate-800">
                                        <p className="flex items-start">
                                            <svg
                                                className="mt-0.5 mr-3 h-6 w-6 flex-shrink-0 text-green-600"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span>
                                                <strong>
                                                    Zero interference:
                                                </strong>{" "}
                                                Your phone on the desk
                                                won&apos;t screw with it
                                            </span>
                                        </p>
                                        <p className="flex items-start">
                                            <svg
                                                className="mt-0.5 mr-3 h-6 w-6 flex-shrink-0 text-green-600"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span>
                                                <strong>
                                                    Consistent everywhere:
                                                </strong>{" "}
                                                Corners don&apos;t suck like on
                                                other tablets
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Signal Acquisition Architecture */}
                {isExpertMode ? (
                    // Expert View
                    <section
                        className="bg-white py-24"
                        aria-labelledby="acquisition-heading"
                    >
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto mb-16 max-w-3xl text-center">
                                <h2
                                    id="acquisition-heading"
                                    className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
                                >
                                    Signal Acquisition Architecture
                                </h2>
                                <p className="text-lg text-slate-700">
                                    High-speed analog-to-digital conversion at
                                    scale with intelligent oversampling
                                </p>
                            </div>

                            {/* ADC Architecture */}
                            <div className="mb-16">
                                <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 text-white shadow-2xl sm:p-12">
                                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                                        <div>
                                            <h3 className="mb-6 text-3xl font-bold">
                                                Texas Instruments ADS7953
                                            </h3>
                                            <p className="mb-8 text-lg leading-relaxed text-slate-200">
                                                At the heart of the acquisition
                                                system lies a high-performance
                                                16-channel, 12-bit Successive
                                                Approximation Register (SAR)
                                                ADC. This architecture enables
                                                rapid digitization of the entire
                                                sensor array through multiplexed
                                                channels, balancing conversion
                                                speed, resolution, and power
                                                efficiency.
                                            </p>

                                            <div className="space-y-4">
                                                <div className="flex items-start">
                                                    <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-md">
                                                        <span className="text-sm font-bold">
                                                            1
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h4 className="mb-1 font-semibold">
                                                            1 MSPS Maximum
                                                            Sample Rate
                                                        </h4>
                                                        <p className="text-sm text-slate-300">
                                                            One million samples
                                                            per second with 1µs
                                                            conversion time per
                                                            channel enables
                                                            rapid sequential
                                                            scanning of
                                                            multiplexed sensor
                                                            inputs
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex items-start">
                                                    <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 shadow-md">
                                                        <span className="text-sm font-bold">
                                                            2
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h4 className="mb-1 font-semibold">
                                                            16-Channel
                                                            Multiplexed Input
                                                        </h4>
                                                        <p className="text-sm text-slate-300">
                                                            Analog multiplexers
                                                            group sensor array
                                                            into 16 high-speed
                                                            channels, reducing
                                                            component count and
                                                            board complexity
                                                            while maintaining
                                                            throughput
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex items-start">
                                                    <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 shadow-md">
                                                        <span className="text-sm font-bold">
                                                            3
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h4 className="mb-1 font-semibold">
                                                            12-Bit Resolution
                                                            (4096 Levels)
                                                        </h4>
                                                        <p className="text-sm text-slate-300">
                                                            Each sample
                                                            quantized to 12 bits
                                                            provides 0.024%
                                                            resolution of
                                                            full-scale range,
                                                            sufficient for
                                                            sub-millimeter
                                                            position
                                                            determination after
                                                            interpolation
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex items-start">
                                                    <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-400 to-indigo-500 shadow-md">
                                                        <span className="text-sm font-bold">
                                                            4
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h4 className="mb-1 font-semibold">
                                                            SPI Interface at 25
                                                            MHz
                                                        </h4>
                                                        <p className="text-sm text-slate-300">
                                                            High-speed serial
                                                            peripheral interface
                                                            enables rapid data
                                                            transfer to
                                                            microcontroller with
                                                            minimal pin count
                                                            and excellent noise
                                                            immunity
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6">
                                                <h4 className="mb-4 text-sm font-semibold tracking-wide text-slate-300 uppercase">
                                                    Acquisition Performance
                                                    Metrics
                                                </h4>
                                                <div className="space-y-4">
                                                    <div>
                                                        <div className="mb-2 flex items-baseline justify-between">
                                                            <span className="text-sm text-slate-300">
                                                                Full Array Scan
                                                                Time (100
                                                                sensors)
                                                            </span>
                                                            <span className="text-2xl font-bold text-blue-400">
                                                                ~100µs
                                                            </span>
                                                        </div>
                                                        <div className="h-2 overflow-hidden rounded-full bg-slate-700">
                                                            <div
                                                                className="h-full w-1/10 rounded-full bg-gradient-to-r from-blue-500 to-blue-400"
                                                                aria-label="100 microseconds scan time"
                                                            />
                                                        </div>
                                                        <p className="mt-1 text-xs text-slate-400">
                                                            1µs per sensor × 100
                                                            sensors = 100µs
                                                            total
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <div className="mb-2 flex items-baseline justify-between">
                                                            <span className="text-sm text-slate-300">
                                                                Theoretical Scan
                                                                Rate
                                                            </span>
                                                            <span className="text-2xl font-bold text-purple-400">
                                                                10 kHz
                                                            </span>
                                                        </div>
                                                        <div className="h-2 overflow-hidden rounded-full bg-slate-700">
                                                            <div
                                                                className="h-full w-full rounded-full bg-gradient-to-r from-purple-500 to-purple-400"
                                                                aria-label="10 kilohertz scan rate"
                                                            />
                                                        </div>
                                                        <p className="mt-1 text-xs text-slate-400">
                                                            1 / 100µs = 10,000
                                                            complete scans per
                                                            second
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <div className="mb-2 flex items-baseline justify-between">
                                                            <span className="text-sm text-slate-300">
                                                                Effective Bits
                                                                of Resolution
                                                                (ENOB)
                                                            </span>
                                                            <span className="text-2xl font-bold text-indigo-400">
                                                                11.2
                                                            </span>
                                                        </div>
                                                        <div className="h-2 overflow-hidden rounded-full bg-slate-700">
                                                            <div
                                                                className="h-full w-11/12 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-400"
                                                                aria-label="11.2 effective bits"
                                                            />
                                                        </div>
                                                        <p className="mt-1 text-xs text-slate-400">
                                                            Accounting for
                                                            quantization and
                                                            thermal noise
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="rounded-2xl border border-indigo-700/50 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-6">
                                                <h4 className="mb-3 text-sm font-semibold tracking-wide text-indigo-300 uppercase">
                                                    Oversampling & Decimation
                                                    Strategy
                                                </h4>
                                                <p className="mb-3 text-sm leading-relaxed text-slate-200">
                                                    The 10 kHz internal scan
                                                    rate enables acquisition of{" "}
                                                    <strong>
                                                        10 complete scans
                                                    </strong>{" "}
                                                    per 1ms USB polling
                                                    interval. These redundant
                                                    measurements are averaged
                                                    through decimation,
                                                    leveraging the statistical
                                                    principle that noise
                                                    averaging improves SNR by
                                                    √N.
                                                </p>
                                                <div className="rounded-lg bg-slate-900/50 p-4 font-mono text-xs text-slate-300">
                                                    <div>
                                                        SNR<sub>improved</sub> =
                                                        SNR
                                                        <sub>single</sub> + 10 ×
                                                        log
                                                        <sub>10</sub>(N)
                                                    </div>
                                                    <div className="mt-2 text-indigo-300">
                                                        For N=10 samples: +10 dB
                                                        improvement
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Polling Rate Analysis */}
                            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                                <div className="rounded-3xl border border-green-200/60 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-8 shadow-sm transition-shadow hover:shadow-md">
                                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 shadow-md">
                                        <svg
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2.5}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="mb-4 text-2xl font-bold text-slate-900">
                                        1000Hz Current Implementation
                                    </h3>
                                    <p className="mb-6 leading-relaxed text-slate-800">
                                        The second-generation prototype operates
                                        at a robust{" "}
                                        <strong className="text-green-700">
                                            1000Hz polling rate
                                        </strong>
                                        , providing a stable foundation with 1ms
                                        intervals—proven and reliable for
                                        high-performance gaming applications
                                        with latencies matching
                                        professional-grade peripherals.
                                    </p>
                                    <div className="mb-6">
                                        <div className="rounded-xl border border-green-200 bg-white p-4">
                                            <div className="mb-2 text-sm font-semibold text-slate-700">
                                                Total System Latency Budget
                                            </div>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-slate-600">
                                                        Sensor scan:
                                                    </span>
                                                    <span className="font-mono font-semibold text-slate-900">
                                                        100µs
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-slate-600">
                                                        Processing &
                                                        interpolation:
                                                    </span>
                                                    <span className="font-mono font-semibold text-slate-900">
                                                        200µs
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-slate-600">
                                                        USB transmission:
                                                    </span>
                                                    <span className="font-mono font-semibold text-slate-900">
                                                        1000µs
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between border-t border-green-200 pt-2">
                                                    <span className="font-semibold text-slate-900">
                                                        Total latency:
                                                    </span>
                                                    <span className="font-mono font-bold text-green-700">
                                                        ~1.3ms
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-center text-slate-800">
                                            <span
                                                className="mr-3 flex-shrink-0 text-green-600"
                                                aria-hidden="true"
                                            >
                                                <svg
                                                    className="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                            <span>
                                                <strong>
                                                    USB 2.0 Full-Speed
                                                    compatible
                                                </strong>{" "}
                                                (12 Mbps, no special drivers)
                                            </span>
                                        </div>
                                        <div className="flex items-center text-slate-800">
                                            <span
                                                className="mr-3 flex-shrink-0 text-green-600"
                                                aria-hidden="true"
                                            >
                                                <svg
                                                    className="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                            <span>
                                                <strong>
                                                    Minimal CPU overhead
                                                </strong>{" "}
                                                (~0.1% on modern processors)
                                            </span>
                                        </div>
                                        <div className="flex items-center text-slate-800">
                                            <span
                                                className="mr-3 flex-shrink-0 text-green-600"
                                                aria-hidden="true"
                                            >
                                                <svg
                                                    className="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                            <span>
                                                <strong>
                                                    Validated real-time
                                                    performance
                                                </strong>{" "}
                                                in competitive gaming scenarios
                                            </span>
                                        </div>
                                        <div className="flex items-center text-slate-800">
                                            <span
                                                className="mr-3 flex-shrink-0 text-green-600"
                                                aria-hidden="true"
                                            >
                                                <svg
                                                    className="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                            <span>
                                                <strong>
                                                    Production-ready firmware
                                                </strong>{" "}
                                                with comprehensive error
                                                handling
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-3xl border border-amber-200/60 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-8 shadow-sm transition-shadow hover:shadow-md">
                                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-600 to-orange-600 shadow-md">
                                        <svg
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2.5}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="mb-4 text-2xl font-bold text-slate-900">
                                        8000Hz Future Target
                                    </h3>
                                    <p className="mb-6 leading-relaxed text-slate-800">
                                        The ambitious{" "}
                                        <strong className="text-amber-700">
                                            8000Hz goal
                                        </strong>{" "}
                                        (125µs intervals) presents non-trivial
                                        engineering challenges spanning firmware
                                        real-time constraints, USB protocol
                                        implementation, and host-side interrupt
                                        handling. Development deferred until
                                        core design validation is complete.
                                    </p>
                                    <div className="mb-6">
                                        <div className="rounded-xl border border-amber-200 bg-white p-4">
                                            <div className="mb-2 text-sm font-semibold text-slate-700">
                                                Technical Challenges
                                            </div>
                                            <div className="space-y-2 text-sm">
                                                <div>
                                                    <div className="mb-1 flex items-center justify-between">
                                                        <span className="text-slate-600">
                                                            Firmware processing
                                                            deadline:
                                                        </span>
                                                        <span className="font-mono font-semibold text-amber-700">
                                                            125µs
                                                        </span>
                                                    </div>
                                                    <div className="h-1 overflow-hidden rounded-full bg-slate-200">
                                                        <div className="h-full w-1/8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="mb-1 flex items-center justify-between">
                                                        <span className="text-slate-600">
                                                            CPU interrupts per
                                                            second:
                                                        </span>
                                                        <span className="font-mono font-semibold text-amber-700">
                                                            8,000
                                                        </span>
                                                    </div>
                                                    <div className="h-1 overflow-hidden rounded-full bg-slate-200">
                                                        <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-orange-500 to-red-500" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-start text-slate-800">
                                            <span
                                                className="mt-0.5 mr-3 flex-shrink-0 text-amber-600"
                                                aria-hidden="true"
                                            >
                                                <svg
                                                    className="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                            <span>
                                                <strong>
                                                    USB 2.0 High-Speed required
                                                </strong>{" "}
                                                (480 Mbps with microframe
                                                scheduling)
                                            </span>
                                        </div>
                                        <div className="flex items-start text-slate-800">
                                            <span
                                                className="mt-0.5 mr-3 flex-shrink-0 text-amber-600"
                                                aria-hidden="true"
                                            >
                                                <svg
                                                    className="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                            <span>
                                                <strong>
                                                    Extreme interrupt load
                                                </strong>{" "}
                                                can cause frame pacing issues in
                                                certain game engines (Unreal
                                                Engine documented)
                                            </span>
                                        </div>
                                        <div className="flex items-start text-slate-800">
                                            <span
                                                className="mt-0.5 mr-3 flex-shrink-0 text-amber-600"
                                                aria-hidden="true"
                                            >
                                                <svg
                                                    className="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                            <span>
                                                <strong>
                                                    Real-time firmware
                                                    constraints:
                                                </strong>{" "}
                                                Complete acquisition →
                                                processing → USB packet in 125µs
                                                window
                                            </span>
                                        </div>
                                        <div className="flex items-start text-slate-800">
                                            <span
                                                className="mt-0.5 mr-3 flex-shrink-0 text-amber-600"
                                                aria-hidden="true"
                                            >
                                                <svg
                                                    className="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                            <span>
                                                <strong>
                                                    MCU selection critical:
                                                </strong>{" "}
                                                Requires 168+ MHz ARM
                                                Cortex-M4/M7 with hardware FPU
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    // Simplified User View - Speed & Response
                    <section className="bg-white py-24">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto mb-16 max-w-3xl text-center">
                                <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                                    1000Hz Polling Rate
                                </h2>
                                <p className="text-lg text-slate-700">
                                    AKA why your plays feel smooth
                                </p>
                            </div>

                            <div className="mx-auto max-w-4xl space-y-8">
                                {/* Speed Explanation */}
                                <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 text-white shadow-2xl sm:p-12">
                                    <h3 className="mb-6 text-3xl font-bold">
                                        1000 Updates Per Second
                                    </h3>
                                    <p className="mb-8 text-lg leading-relaxed text-slate-200">
                                        Most tablets? 100-200Hz. This one?
                                        1000Hz. Working on 8000Hz because why
                                        not. That&apos;s why your cursor
                                        actually goes where you want it to go.
                                    </p>

                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div className="rounded-xl border border-slate-700 bg-slate-800/70 p-6">
                                            <div className="mb-2 text-4xl font-bold text-green-400">
                                                1000Hz
                                            </div>
                                            <div className="mb-3 text-slate-300">
                                                Right Now
                                            </div>
                                            <p className="text-sm text-slate-400">
                                                Fast enough to not be the reason
                                                you missed. Smooth as hell.
                                            </p>
                                        </div>

                                        <div className="rounded-xl border border-slate-700 bg-slate-800/70 p-6">
                                            <div className="mb-2 text-4xl font-bold text-amber-400">
                                                8000Hz
                                            </div>
                                            <div className="mb-3 text-slate-300">
                                                In Development
                                            </div>
                                            <p className="text-sm text-slate-400">
                                                Overkill? Maybe. Doing it
                                                anyway? Absolutely.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Latency Budget */}
                                <div className="rounded-3xl border border-green-200/60 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-8 shadow-sm">
                                    <h3 className="mb-4 text-2xl font-bold text-slate-900">
                                        Total Input Lag
                                    </h3>
                                    <p className="mb-6 text-slate-800">
                                        From pen movement to USB output:{" "}
                                        <strong className="text-green-700">
                                            ~1.3ms
                                        </strong>
                                        . Your monitor&apos;s probably slower
                                        than that tbh.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <div className="w-32 text-sm text-slate-700">
                                                Reading sensors:
                                            </div>
                                            <div className="h-6 flex-1 overflow-hidden rounded-full bg-slate-200">
                                                <div
                                                    className="flex h-full items-center justify-end bg-gradient-to-r from-indigo-500 to-indigo-600 pr-2 text-xs font-semibold text-white"
                                                    style={{ width: "8%" }}
                                                >
                                                    0.1ms
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-32 text-sm text-slate-700">
                                                Processing:
                                            </div>
                                            <div className="h-6 flex-1 overflow-hidden rounded-full bg-slate-200">
                                                <div
                                                    className="flex h-full items-center justify-end bg-gradient-to-r from-purple-500 to-purple-600 pr-2 text-xs font-semibold text-white"
                                                    style={{ width: "15%" }}
                                                >
                                                    0.2ms
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-32 text-sm text-slate-700">
                                                USB transfer:
                                            </div>
                                            <div className="h-6 flex-1 overflow-hidden rounded-full bg-slate-200">
                                                <div
                                                    className="flex h-full items-center justify-end bg-gradient-to-r from-pink-500 to-pink-600 pr-2 text-xs font-semibold text-white"
                                                    style={{ width: "77%" }}
                                                >
                                                    1.0ms
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Power and Hardware Section */}
                {isExpertMode ? (
                    // Expert View
                    <section
                        className="bg-gradient-to-b from-slate-50 via-violet-50/30 to-white py-24"
                        aria-labelledby="power-heading"
                    >
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto mb-16 max-w-3xl text-center">
                                <h2
                                    id="power-heading"
                                    className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
                                >
                                    Power & Signal Integrity
                                </h2>
                                <p className="text-lg text-slate-700">
                                    Balancing efficiency and noise in
                                    high-performance analog systems
                                </p>
                            </div>

                            {/* PCB Layout and Signal Integrity */}
                            <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 text-white shadow-2xl sm:p-12">
                                <div className="mb-8">
                                    <h3 className="mb-4 text-3xl font-bold">
                                        PCB Layout Engineering & Signal
                                        Integrity
                                    </h3>
                                    <p className="text-lg leading-relaxed text-slate-300">
                                        High-frequency analog systems demand
                                        meticulous PCB design. Every trace, via,
                                        and plane contributes to or degrades
                                        signal integrity. The Pompyboard&apos;s
                                        layout evolution demonstrates the
                                        critical interplay between physical
                                        design and electrical performance.
                                    </p>
                                </div>

                                <div className="mb-12 grid gap-8 lg:grid-cols-3">
                                    <div className="rounded-2xl border border-slate-700/60 bg-gradient-to-br from-slate-800 to-slate-800/50 p-6 transition-colors hover:border-blue-500/50">
                                        <div className="mb-3 flex items-baseline">
                                            <div className="mr-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent">
                                                1.6
                                            </div>
                                            <div className="text-slate-400">
                                                mm
                                            </div>
                                        </div>
                                        <div className="mb-4 flex items-center text-lg text-slate-300">
                                            <svg
                                                className="mr-2 h-5 w-5 text-slate-500"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2.5}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                />
                                            </svg>
                                            1.0 mm
                                        </div>
                                        <h4 className="mb-3 text-lg font-bold">
                                            Strategic Thickness Reduction
                                        </h4>
                                        <p className="mb-4 text-sm leading-relaxed text-slate-400">
                                            Reducing PCB thickness from standard
                                            1.6mm to 1.0mm achieved dual
                                            benefits: reduced device weight for
                                            improved ergonomics and tighter
                                            field containment for signal
                                            integrity.
                                        </p>
                                        <div className="rounded-lg border border-slate-700/50 bg-slate-900/50 p-3">
                                            <div className="mb-2 text-xs font-semibold tracking-wide text-blue-400 uppercase">
                                                Physical Impact
                                            </div>
                                            <div className="space-y-1 text-sm text-slate-300">
                                                <div>
                                                    • 37.5% weight reduction
                                                </div>
                                                <div>
                                                    • Improved electromagnetic
                                                    field confinement
                                                </div>
                                                <div>
                                                    • Lower trace-to-plane
                                                    inductance
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-2xl border border-slate-700/60 bg-gradient-to-br from-slate-800 to-slate-800/50 p-6 transition-colors hover:border-purple-500/50">
                                        <div className="mb-3 flex items-baseline">
                                            <div className="mr-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-5xl font-bold text-transparent">
                                                0
                                            </div>
                                            <div className="text-slate-400">
                                                events
                                            </div>
                                        </div>
                                        <div className="mb-4 text-lg text-slate-300">
                                            Crosstalk Elimination
                                        </div>
                                        <h4 className="mb-3 text-lg font-bold">
                                            Multiplexer Channel Isolation
                                        </h4>
                                        <p className="mb-4 text-sm leading-relaxed text-slate-400">
                                            Crosstalk between multiplexed sensor
                                            channels can cause
                                            &quot;ghosting&quot; where one
                                            sensor&apos;s signal bleeds into
                                            adjacent channels, corrupting
                                            position data. Complete elimination
                                            achieved.
                                        </p>
                                        <div className="rounded-lg border border-slate-700/50 bg-slate-900/50 p-3">
                                            <div className="mb-2 text-xs font-semibold tracking-wide text-purple-400 uppercase">
                                                Measured Isolation
                                            </div>
                                            <div className="space-y-1 text-sm text-slate-300">
                                                <div>
                                                    • &gt;-60 dB inter-channel
                                                    isolation
                                                </div>
                                                <div>
                                                    • &lt;0.1% signal coupling
                                                    at 1 MHz
                                                </div>
                                                <div>
                                                    • No observable cross-talk
                                                    artifacts
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-2xl border border-slate-700/60 bg-gradient-to-br from-slate-800 to-slate-800/50 p-6 transition-colors hover:border-green-500/50">
                                        <div className="mb-3 overflow-visible">
                                            <div className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text pt-1 pb-1 text-5xl leading-tight font-bold text-transparent">
                                                ↓ 75%
                                            </div>
                                        </div>
                                        <div className="mb-4 text-lg text-slate-300">
                                            Noise Floor Reduction
                                        </div>
                                        <h4 className="mb-3 text-lg font-bold">
                                            Optimized Trace Routing
                                        </h4>
                                        <p className="mb-4 text-sm leading-relaxed text-slate-400">
                                            Strategic trace routing, ground
                                            plane usage, and via placement
                                            reduced the measured noise floor by
                                            75%, dramatically improving
                                            signal-to-noise ratio across all
                                            sensor channels.
                                        </p>
                                        <div className="rounded-lg border border-slate-700/50 bg-slate-900/50 p-3">
                                            <div className="mb-2 text-xs font-semibold tracking-wide text-green-400 uppercase">
                                                SNR Improvement
                                            </div>
                                            <div className="space-y-1 text-sm text-slate-300">
                                                <div>
                                                    • From ~40 dB to &gt;52 dB
                                                    typical
                                                </div>
                                                <div>
                                                    • 4× reduction in background
                                                    noise
                                                </div>
                                                <div>
                                                    • Enhanced position
                                                    resolution
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div>
                                        <h4 className="mb-6 flex items-center text-2xl font-bold">
                                            <span className="mr-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg">
                                                <svg
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2.5}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                                    />
                                                </svg>
                                            </span>
                                            Advanced Crosstalk Mitigation
                                            Techniques
                                        </h4>
                                        <p className="mb-8 leading-relaxed text-slate-300">
                                            Crosstalk—unwanted electromagnetic
                                            coupling between signal
                                            traces—manifests in two primary
                                            forms:
                                            <strong className="text-white">
                                                {" "}
                                                capacitive coupling
                                            </strong>{" "}
                                            (dominant in high-impedance
                                            circuits) and
                                            <strong className="text-white">
                                                {" "}
                                                inductive coupling
                                            </strong>{" "}
                                            (dominant in low-impedance,
                                            high-current paths). The Pompyboard
                                            implements industry-proven
                                            mitigation strategies:
                                        </p>
                                    </div>

                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div className="rounded-xl border border-indigo-500/30 bg-gradient-to-br from-slate-800 to-slate-800/70 p-6 transition-colors hover:border-indigo-500/60">
                                            <div className="mb-4 flex items-start">
                                                <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-md">
                                                    <svg
                                                        className="h-5 w-5"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={2.5}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                                                        />
                                                    </svg>
                                                </div>
                                                <h5 className="text-lg font-bold text-indigo-400">
                                                    Solid Ground Planes
                                                </h5>
                                            </div>
                                            <p className="mb-3 text-sm leading-relaxed text-slate-400">
                                                Continuous copper ground planes
                                                on inner layers provide
                                                low-inductance return paths for
                                                all signals. This constrains
                                                electromagnetic fields between
                                                the signal trace and ground
                                                plane, preventing field
                                                spreading and coupling to
                                                adjacent traces.
                                            </p>
                                            <div className="rounded bg-slate-900/50 p-2 font-mono text-xs text-slate-500">
                                                L<sub>trace</sub> ∝ ln(2h/w) →
                                                Minimized by reducing h
                                                (trace-to-plane spacing)
                                            </div>
                                        </div>

                                        <div className="rounded-xl border border-purple-500/30 bg-gradient-to-br from-slate-800 to-slate-800/70 p-6 transition-colors hover:border-purple-500/60">
                                            <div className="mb-4 flex items-start">
                                                <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 shadow-md">
                                                    <svg
                                                        className="h-5 w-5"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={2.5}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                                                        />
                                                    </svg>
                                                </div>
                                                <h5 className="text-lg font-bold text-purple-400">
                                                    3W Spacing Rule
                                                </h5>
                                            </div>
                                            <p className="mb-3 text-sm leading-relaxed text-slate-400">
                                                Maintaining trace separation of
                                                at least 3× the trace width
                                                dramatically reduces both
                                                capacitive (electric field) and
                                                inductive (magnetic field)
                                                coupling. This geometric
                                                constraint is religiously
                                                followed for all analog sensor
                                                traces.
                                            </p>
                                            <div className="rounded bg-slate-900/50 p-2 font-mono text-xs text-slate-500">
                                                Spacing ≥ 3W → Crosstalk &lt;
                                                -40 dB for typical impedances
                                            </div>
                                        </div>

                                        <div className="rounded-xl border border-pink-500/30 bg-gradient-to-br from-slate-800 to-slate-800/70 p-6 transition-colors hover:border-pink-500/60">
                                            <div className="mb-4 flex items-start">
                                                <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 shadow-md">
                                                    <svg
                                                        className="h-5 w-5"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={2.5}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M4 16V4m4 12V8m4 8V6m4 8V4m4 8v8"
                                                        />
                                                    </svg>
                                                </div>
                                                <h5 className="text-lg font-bold text-pink-400">
                                                    Orthogonal Layer Routing
                                                </h5>
                                            </div>
                                            <p className="mb-3 text-sm leading-relaxed text-slate-400">
                                                Traces on adjacent PCB layers
                                                run perpendicular to each other
                                                (e.g., Layer 1 horizontal, Layer
                                                2 vertical). This minimizes
                                                parallel run length, which is
                                                the primary contributor to
                                                crosstalk. Only perpendicular
                                                coupling (minimal) occurs at
                                                crossing points.
                                            </p>
                                            <div className="rounded bg-slate-900/50 p-2 font-mono text-xs text-slate-500">
                                                Parallel length L → 0 →
                                                Near-zero broadside coupling
                                            </div>
                                        </div>

                                        <div className="rounded-xl border border-amber-500/30 bg-gradient-to-br from-slate-800 to-slate-800/70 p-6 transition-colors hover:border-amber-500/60">
                                            <div className="mb-4 flex items-start">
                                                <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 shadow-md">
                                                    <svg
                                                        className="h-5 w-5"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={2.5}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                                                        />
                                                    </svg>
                                                </div>
                                                <h5 className="text-lg font-bold text-amber-400">
                                                    Active Guard Traces
                                                </h5>
                                            </div>
                                            <p className="mb-3 text-sm leading-relaxed text-slate-400">
                                                Grounded &quot;guard&quot;
                                                traces routed between critical
                                                analog signals act as
                                                electromagnetic shields. These
                                                guards are connected to the
                                                ground plane via numerous
                                                stitching vias (every 1-2mm),
                                                creating a Faraday cage effect
                                                that intercepts stray fields.
                                            </p>
                                            <div className="rounded bg-slate-900/50 p-2 font-mono text-xs text-slate-500">
                                                Guard with via stitching → 15-20
                                                dB additional isolation
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-xl border border-indigo-500/30 bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-pink-900/40 p-6 sm:p-8">
                                        <h5 className="mb-4 flex items-center text-sm font-semibold tracking-wide text-indigo-300 uppercase">
                                            <svg
                                                className="mr-2 h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                />
                                            </svg>
                                            Validation & Measurement
                                        </h5>
                                        <p className="mb-4 text-sm leading-relaxed text-slate-200">
                                            All layout improvements were
                                            validated through rigorous
                                            measurement. Vector network analyzer
                                            (VNA) measurements confirmed &gt;60
                                            dB isolation between channels.
                                            Oscilloscope captures showed
                                            dramatic reduction in coupled
                                            switching noise. Real-world position
                                            accuracy tests demonstrated
                                            sub-0.5mm repeatability across the
                                            entire active area.
                                        </p>
                                        <div className="grid grid-cols-3 gap-4 text-center">
                                            <div className="rounded-lg bg-slate-900/50 p-3">
                                                <div className="text-2xl font-bold text-indigo-400">
                                                    &gt;60 dB
                                                </div>
                                                <div className="mt-1 text-xs text-slate-400">
                                                    Channel Isolation
                                                </div>
                                            </div>
                                            <div className="rounded-lg bg-slate-900/50 p-3">
                                                <div className="text-2xl font-bold text-purple-400">
                                                    75%
                                                </div>
                                                <div className="mt-1 text-xs text-slate-400">
                                                    Noise Reduction
                                                </div>
                                            </div>
                                            <div className="rounded-lg bg-slate-900/50 p-3">
                                                <div className="text-2xl font-bold text-pink-400">
                                                    &lt;0.5mm
                                                </div>
                                                <div className="mt-1 text-xs text-slate-400">
                                                    Position Accuracy
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    // Simplified User View - Power Systems
                    <section className="bg-gradient-to-b from-slate-50 via-violet-50/30 to-white py-24">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto mb-16 max-w-3xl text-center">
                                <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                                    Power & PCB Stuff
                                </h2>
                                <p className="text-lg text-slate-700">
                                    Why it doesn&apos;t overheat or lag
                                </p>
                            </div>

                            <div className="mx-auto max-w-4xl space-y-8">
                                {/* PCB Layout Magic */}
                                <div className="rounded-3xl border border-green-200/60 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-8 shadow-sm">
                                    <h3 className="mb-4 text-2xl font-bold text-slate-900">
                                        Circuit Board Layout
                                    </h3>
                                    <p className="mb-6 text-slate-800">
                                        Problem: Power circuits are noisy AF.
                                        Sensors need to be quiet to work
                                        properly. Can&apos;t have electrical
                                        noise screwing with magnetic readings.
                                    </p>

                                    <div className="mb-4 rounded-xl border border-green-200 bg-white p-6 shadow-sm">
                                        <h4 className="mb-3 text-lg font-bold text-slate-900">
                                            Solution: Smart Layout
                                        </h4>
                                        <div className="space-y-3 text-slate-800">
                                            <div className="flex items-start">
                                                <div className="mt-0.5 mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100">
                                                    <span className="text-sm font-bold text-indigo-700">
                                                        1
                                                    </span>
                                                </div>
                                                <div>
                                                    <strong className="text-indigo-700">
                                                        Separation:
                                                    </strong>{" "}
                                                    Keep noisy power stuff far
                                                    from sensors
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="mt-0.5 mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-100">
                                                    <span className="text-sm font-bold text-purple-700">
                                                        2
                                                    </span>
                                                </div>
                                                <div>
                                                    <strong className="text-purple-700">
                                                        Shielding:
                                                    </strong>{" "}
                                                    Copper ground planes to
                                                    block interference
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="mt-0.5 mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-pink-100">
                                                    <span className="text-sm font-bold text-pink-700">
                                                        3
                                                    </span>
                                                </div>
                                                <div>
                                                    <strong className="text-pink-700">
                                                        Filtering:
                                                    </strong>{" "}
                                                    Clean power before it hits
                                                    sensors
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-xl border border-green-300 bg-gradient-to-r from-green-100 to-teal-100 p-5">
                                        <p className="flex items-center font-semibold text-slate-800">
                                            <svg
                                                className="mr-2 h-5 w-5 text-green-600"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            Result: Clean readings, no
                                            interference, consistent performance
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Conclusion Section */}
                {isExpertMode ? (
                    // Expert View
                    <section className="bg-gradient-to-b from-white to-slate-50 py-24">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-4xl">
                                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-12 text-center text-white shadow-2xl sm:p-16">
                                    <div
                                        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"
                                        aria-hidden="true"
                                    ></div>
                                    <div className="relative">
                                        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 shadow-lg backdrop-blur-sm">
                                            <svg
                                                className="h-8 w-8"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                                />
                                            </svg>
                                        </div>
                                        <h2 className="mb-6 text-4xl font-bold">
                                            Engineering Excellence Through
                                            Iteration
                                        </h2>
                                        <p className="mb-8 text-xl leading-relaxed text-blue-50">
                                            The Pompyboard exemplifies modern
                                            hardware engineering: a synthesis of
                                            electromagnetic theory, analog
                                            circuit design, signal processing,
                                            and manufacturing pragmatism. Every
                                            decision—from Hall effect sensor
                                            selection, to buck converter
                                            adoption despite noise challenges,
                                            to strategic PCB thickness
                                            reduction—reflects deep
                                            understanding of fundamental physics
                                            balanced against real-world
                                            constraints of cost, availability,
                                            and producibility.
                                        </p>
                                        <div className="mb-8 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                                            <p className="text-lg leading-relaxed text-blue-100">
                                                This open-source project
                                                demonstrates that world-class
                                                performance doesn&apos;t require
                                                proprietary secrets or exotic
                                                components. With rigorous
                                                engineering methodology, careful
                                                measurement, and iterative
                                                refinement, exceptional results
                                                are achievable with readily
                                                available components and
                                                transparent design.
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold">
                                            <span className="rounded-full border border-white/30 bg-white/20 px-4 py-2 backdrop-blur-sm">
                                                Open Source Hardware
                                            </span>
                                            <span className="rounded-full border border-white/30 bg-white/20 px-4 py-2 backdrop-blur-sm">
                                                Community Driven
                                            </span>
                                            <span className="rounded-full border border-white/30 bg-white/20 px-4 py-2 backdrop-blur-sm">
                                                Performance Focused
                                            </span>
                                            <span className="rounded-full border border-white/30 bg-white/20 px-4 py-2 backdrop-blur-sm">
                                                Rigorously Tested
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    // Simplified User View - Conclusion
                    <section className="bg-gradient-to-b from-white to-slate-50 py-24">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-4xl">
                                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-12 text-center text-white shadow-2xl sm:p-16">
                                    <div
                                        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"
                                        aria-hidden="true"
                                    ></div>
                                    <div className="relative">
                                        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 shadow-lg backdrop-blur-sm">
                                            <svg
                                                className="h-8 w-8"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                                />
                                            </svg>
                                        </div>
                                        <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
                                            TL;DR
                                        </h2>
                                        <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-white/90 sm:text-2xl">
                                            Magnets + fast sensors + smart
                                            engineering = tablet that actually
                                            works how you want it to. Open
                                            source, no BS, built for people who
                                            care about input lag.
                                        </p>
                                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold">
                                            <span className="rounded-full border border-white/30 bg-white/20 px-4 py-2 backdrop-blur-sm">
                                                Open Source
                                            </span>
                                            <span className="rounded-full border border-white/30 bg-white/20 px-4 py-2 backdrop-blur-sm">
                                                1000Hz
                                            </span>
                                            <span className="rounded-full border border-white/30 bg-white/20 px-4 py-2 backdrop-blur-sm">
                                                No Battery
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </div>
    )
}

export default function TechnologyPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
            <TechnologyPageContent />
        </Suspense>
    )
}
