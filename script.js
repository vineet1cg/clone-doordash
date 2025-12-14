// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Tab functionality
    const tabs = document.querySelectorAll('.neighborhood-section .tab');
    const tabPanels = document.querySelectorAll('.neighborhood-section .tab-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove 'active' class from all tabs and tab panels
            tabs.forEach(t => t.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            // Add 'active' class to the clicked tab
            tab.classList.add('active');

            // Determine which panel to activate based on the clicked tab's text content
            let targetPanelId;
            if (tab.textContent.includes('Top Cities')) {
                targetPanelId = 'cities';
            } else if (tab.textContent.includes('Top Cuisines')) {
                targetPanelId = 'cuisines';
            } else if (tab.textContent.includes('Top Chains')) {
                targetPanelId = 'chains';
            }

            // Add 'active' class to the corresponding tab panel
            const targetPanel = document.getElementById(targetPanelId);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // See less/more functionality
    const seeLessButton = document.querySelector('.see-less');
    const seeLessText = seeLessButton.querySelector('span:first-child');
    const seeLessChevron = seeLessButton.querySelector('.chevron');
    const neighborhoodSection = document.querySelector('.neighborhood-section');

    // Initial state: collapsed, showing "See more"
    // The CSS already handles hiding .hidden-items by default.
    seeLessText.textContent = 'See more';
    // The chevron is already pointing down by default CSS.

    seeLessButton.addEventListener('click', () => {
        neighborhoodSection.classList.toggle('expanded');

        if (neighborhoodSection.classList.contains('expanded')) {
            seeLessText.textContent = 'See less';
        } else {
            seeLessText.textContent = 'See more';
        }
    });
});