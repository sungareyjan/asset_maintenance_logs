import BaseCheckboxGroup from "@/shared/ui/base/form/BaseCheckboxGroup";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";

export default function RepairChecklistStep() {
    const physicalConditionOption = [
        {
            value: "Chassis & Enclosure",
            label: (
                <Flex gap={1}>
                    <Text fontWeight="Bold"> Chassis & Enclosure: </Text>
                    <Text>
                        Verify housing is structurally sound with no cracks,
                        loose panels, damaged hinges, or missing chassis
                        screws.{" "}
                    </Text>
                </Flex>
            ),
        },
        {
            value: "Cabling & Power Ports",
            label: (
                <Flex gap={1}>
                    <Text fontWeight="bold"> Cabling & Power Ports: </Text>
                    <Text>
                        Inspect power adapters, cords, USB/HDMI, and network
                        patch cables for fraying, pin damage, or loose socket
                        fits.{" "}
                    </Text>
                </Flex>
            ),
        },
        {
            value: "Power & Voltage Output:",
            label: (
                <Flex gap={1}>
                    <Text fontWeight="bold">Power & Voltage Output:</Text>
                    <Text>
                        Confirm stable boot voltage, proper power switch
                        responsiveness, and battery retention
                        (laptops/UPS).{" "}
                    </Text>
                </Flex>
            ),
        },
        {
            value: "De-dusting & Cleaning:",
            label: (
                <Flex gap={1}>
                    <Text fontWeight="bold">De-dusting & Cleaning:</Text>
                    <Text>
                        Clear dust accumulation from exhaust vents, chassis
                        fans, card slots, and paper-feed pathways using dry
                        blower
                    </Text>
                </Flex>
            ),
        },
    ];

    const maintenanceOption = [
        {
            value: "Thermal Dissipation",
            label: (
                <Flex gap={1}>
                    <Text fontWeight="bold"> Thermal Dissipation: </Text>
                    <Text>
                        Inspect fan rotation, de-clog heatsink cooling fins, and
                        apply fresh thermal compound if operating temperatures
                        exceed spec.
                    </Text>
                </Flex>
            ),
        },
        {
            value: "Storage Integrity (SMART)",
            label: (
                <Flex gap={1}>
                    <Text fontWeight="bold">Storage Integrity (SMART): </Text>
                    <Text>
                        Test drive health & sector count (HDD/SSD ≥ 90%), check
                        file system integrity, and eliminate disk read/write
                        errors.
                    </Text>
                </Flex>
            ),
        },
        {
            value: "Memory (RAM) Diagnostics",
            label: (
                <Flex gap={1}>
                    <Text fontWeight="bold">Memory (RAM) Diagnostics: </Text>
                    <Text>
                        Clean module contacts, secure DIMM slots, and run
                        address memory verification test to ensure zero read
                        faults.
                    </Text>
                </Flex>
            ),
        },
        {
            value: "OS Baseline & Malware Remediation",
            label: (
                <Flex gap={1}>
                    <Text fontWeight="bold">
                        OS Baseline & Malware Remediation:{" "}
                    </Text>
                    <Text>
                        Validate OS stability, update official antivirus
                        signatures, run full malware scan, and purge temporary
                        caches.
                    </Text>
                </Flex>
            ),
        },
        {
            value: "I/O & Display Peripherals",
            label: (
                <Flex gap={1}>
                    <Text fontWeight="bold">I/O & Display Peripherals: </Text>
                    <Text>
                        Verify display panel (no dead pixel/flicker), keyboard
                        keys, touchpad, audio jacks, webcam, and external USB
                        ports.
                    </Text>
                </Flex>
            ),
        },
    ];

    const ImagingOption = [
        {
            value: "Paper Feed & Rollers",
            label: (
                <Flex gap={1}>
                    <Text fontWeight="bold">Paper Feed & Rollers:</Text>
                    <Text>
                        Clean rubber pick-up rollers, separation pads, and ADF
                        feeder to resolve multi-feeding, paper slipping, or
                        jams.
                    </Text>
                </Flex>
            ),
        },
        {
            value: "Printhead & Toner System",
            label: (
                <Flex gap={1}>
                    <Text fontWeight="bold">Printhead & Toner System:</Text>
                    <Text>
                        Execute nozzle check, alignment, and ink purging (inkjets);
                        inspect toner cartridge, drum, and transfer belt for
                        leaks/banding.{" "}
                    </Text>
                </Flex>
            ),
        },
        {
            value: "Optics & Platen Glass",
            label: (
                <Flex gap={1}>
                    <Text fontWeight="bold">Optics & Platen Glass:</Text>
                    <Text>
                        Clean flatbed platen glass, ADF mirror strips, and
                        CIS/CCD sensor lenses to remove vertical streaks or
                        smudge lines.
                    </Text>
                </Flex>
            ),
        },
        {
            value: "Calibration & Mechanical Movement",
            label: (
                <Flex gap={1}>
                    <Text fontWeight="bold">
                        Calibration & Mechanical Movement:
                    </Text>
                    <Text>
                        Clean carriage rails, inspect timing belt tension, apply
                        silicone gear lubricant, and execute test print/scan
                        cycles.
                    </Text>
                </Flex>
            ),
        },
    ];
    const NetworkInfrastructureOption = [
        {
            value: "physical_interface_link_state",
            label: (
                <Flex gap={1}>
                    <Text fontWeight="bold">
                        Physical Interface & Link State:
                    </Text>
                    <Text>
                        Test RJ-45 LAN jacks, crimp integrity, PoE power
                        delivery, link/activity LEDs, and 1 Gbps port
                        auto-negotiation.
                    </Text>
                </Flex>
            ),
        },
        {
            value: "ip_addressing_dns",
            label: (
                <Flex gap={1}>
                    <Text fontWeight="bold">IP Addressing & DNS:</Text>
                    <Text>
                        Verify DHCP lease or assigned static IP, subnet mask,
                        default gateway, and successful DNS address resolution.
                    </Text>
                </Flex>
            ),
        },
        {
            value: "da_intranet_service_reachability",
            label: (
                <Flex gap={1}>
                    <Text fontWeight="bold">
                        DA Intranet & Service Reachability:
                    </Text>
                    <Text>
                        Ping test default gateway (&lt;5ms response), verify
                        regional shared drive mapping, and test network
                        printing.
                    </Text>
                </Flex>
            ),
        },
        {
            value: "firmware_wireless_security",
            label: (
                <Flex gap={1}>
                    <Text fontWeight="bold">Firmware & Wireless Security:</Text>
                    <Text>
                        Flash stable firmware/driver updates, verify WPA2/WPA3
                        enterprise encryption, and confirm AP SSID broadcasting.
                    </Text>
                </Flex>
            ),
        },
    ];

    const qualityAssuranceOption = [
    {
        value: "burn_in_stress_testing",
        label: (
            <Flex gap={1}>
                <Text fontWeight="bold">
                    Burn-In Stress Testing:
                </Text>
                <Text>
                    Execute continuous 30 to 60 minute stress run to ensure stability under load without spontaneous reboots or thermal shutdowns.
                </Text>
            </Flex>
        ),
    },
    {
        value: "data_hygiene_privacy",
        label: (
            <Flex gap={1}>
                <Text fontWeight="bold">
                    Data Hygiene & Privacy:
                </Text>
                <Text>
                    Delete temporary technician tools, installation ISOs,
                    test files, and credentials from the unit.
                </Text>
            </Flex>
        ),
    },
    {
        value: "turnover_packaging",
        label: (
            <Flex gap={1}>
                <Text fontWeight="bold">
                    Turnover Packaging:
                </Text>
                <Text>
                    {/* Continue the source text here once available. */}
                </Text>
            </Flex>
        ),
    },
    ];
    return (
        <Grid gap={5}>
            <Box
                borderWidth="1px"
                borderColor="gray.200"
                borderRadius="lg"
                p={5}
                bg="white"
                shadow="sm"
            >
                <BaseCheckboxGroup
                    label="1. Universal Physical Electrical & Preventive Maintenance (All Assets)"
                    isRequired
                    options={physicalConditionOption}
                />
            </Box>

            <Box
                borderWidth="1px"
                borderColor="gray.200"
                borderRadius="lg"
                p={5}
                bg="white"
                shadow="sm"
            >
                <BaseCheckboxGroup
                    label="2. Computing Systems Maintenance (Desktop PC & Laptop)"
                    isRequired
                    options={maintenanceOption}
                />
            </Box>

            <Box
                borderWidth="1px"
                borderColor="gray.200"
                borderRadius="lg"
                p={5}
                bg="white"
                shadow="sm"
            >
                <BaseCheckboxGroup
                    label="3. Imaging & Hardcopy Systems Maintenance (Printer & Scanner)"
                    isRequired
                    options={ImagingOption}
                />
            </Box>

            <Box
                borderWidth="1px"
                borderColor="gray.200"
                borderRadius="lg"
                p={5}
                bg="white"
                shadow="sm"
            >
                <BaseCheckboxGroup
                    label="4. Network & Infrastructure Maintenance (Switches, Routers, APs & NICs)"
                    isRequired
                    options={NetworkInfrastructureOption}
                />
            </Box>

            <Box
                borderWidth="1px"
                borderColor="gray.200"
                borderRadius="lg"
                p={5}
                bg="white"
                shadow="sm"
            >
                <BaseCheckboxGroup
                    label="5. Quality Assurance, Burn-In & Turn-Over Readiness"
                    isRequired
                    options={qualityAssuranceOption}
                />
            </Box>
        </Grid>
    );
}
